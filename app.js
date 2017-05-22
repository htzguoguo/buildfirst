/**
 * Created by Administrator on 2016/12/27.
 */

var http = require( 'http' ),
    fs = require( 'fs' ),
    path = require( 'path' ),
    url = require( 'url' ),
    mime = require( 'mime' ),
    root = __dirname + '/chapter_6_understanding_async_flow_control/06_promise',
    default_file = path.join( root,  'promise.html') ,
    port = 3000,
    users = [],
    users_index = {},
    counter = 0,
    server,
    onPost,
    onGet,
    onParseBody,
    addUser,
    getUser,
    sendDefault,
    getStatic,
    matchRequireUrl
    ;

server = http.createServer( function ( req, res ) {
    onGet( '/', req, res, sendDefault );
    getStatic( req, res );
    onPost( '/api/user', req, res, addUser );
    onGet( '/api/user/:id', req, res, getUser);
    onGet( '/api/users/list', req, res, function ( req, res, para ) {
        sendJson( users, res );
    } );
} );

onPost = function ( url, req, res, cb ) {
    var method = req.method.toLocaleLowerCase();
    if ( method === 'post' ) {
        if ( matchRequireUrl( url, req ) ) {
            if ( isJsonData( req ) ) {
                onParseBody( req, res, cb  );
            }else {
                send400( res );
            }
        } else {
            send400( res );
        }
    }
};

addUser = function ( req, res, data ) {
    if ( data ) {
        var user = JSON.parse( data );
        if ( user.hasOwnProperty( 'name' ) && user.hasOwnProperty( 'age' ) )  {
            user.id = ++counter;
            users.push( user );
            users_index[ user.id ] = user;
        }
    }
    sendJson( user, res );
   /* setTimeout(function() {
        sendJson( user, res );
    }, 5000);*/
};

getUser = function ( req, res ) {
    var id = req.tjxpara.id;
    if ( id ) {
        if ( users_index.hasOwnProperty( id ) ) {
            sendJson( users_index[ id ], res );
            return;
        }
    }
   send404( res );
};


sendDefault = function ( req, res, para ) {
    sendFile( default_file, res );
};

onParseBody = function ( req, res, cb ) {
    var data = '';
    req.setEncoding( 'utf8' );
    req.on( 'data', function ( chunk ) {
        data += chunk;
    } );
    req.on( 'end', function () {
        cb( req, res, data );
    } );
    req.on( 'error', function ( err ) {
        send500( err, res );
    } );
}

onGet = function ( url, req, res, cb ) {
    var method = req.method.toLocaleLowerCase();
    if ( method === 'get' ) {
        if ( matchRequireUrl( url, req ) ) {
            cb( req, res );
        }
    }
};

getStatic = function ( req, res ) {
    var url = req.url;
    if ( url.indexOf('.') !== -1 ) {
        sendFile(  path.join( root, url  ), res );
    }
};

matchRequireUrl = function ( url, req ) {
    var u = req.url;
    if ( url === u ) {
        return true;
    }else if ( url.indexOf( ':' ) !== -1 ) {
        var uu = u.split( '/' ),
            ll = url.split( '/' ),
            tjxpara = {}
            ;
        if ( uu.length === ll.length ) {
            var len = uu.length,
                index = 0;
            for ( ; index < len; index++ ) {
                if ( ll[ index ].indexOf( ':' ) !== -1 ){
                    tjxpara[ ll[ index ].slice(1) ] = uu[ index ];
                }else {
                    if ( ll[ index ] !== uu[ index ] ) {
                        return false;
                    }

                }
            }
            req[ 'tjxpara' ] = tjxpara;
            return true;
        }
    }else {
        return false;
    }
    return false;
};

function isJsonData( req ) {
    var type = req.headers[ 'content-type' ];
    if ( type.indexOf( 'application/json' ) === 0 ) {
        return true;
    }else {
        return false;
    }
}

function sendText( obj, res ) {
    var str = JSON.stringify( obj );
    res.setHeader( 'Content-Type', 'text/plain' );
    res.setHeader( 'Content-Length', Buffer.byteLength( str ) );
    res.end( str );
}

function sendJson( obj, res ) {
    var str = JSON.stringify( obj );
    res.setHeader( 'Content-Type', 'application/Json' );
    res.setHeader( 'Content-Length', Buffer.byteLength( str ) );
    res.end( str );
}

function sendFile( filePath, res ) {
    fs.stat( filePath, function ( err, stat ) {
        if ( err ) {
            send404( res );
        }else {
            var stream = fs.createReadStream(filePath);
            res.setHeader( 'Content-Type', mime.lookup( path.basename( filePath ) )  );
            res.setHeader( 'Content-Length', stat.size );
            stream.pipe( res );
            stream.on( 'error', function ( err ) {
                send500( err, res );
            } );
        }
    } );
}

function send404( res ) {
    res.statusCode = 404;
    res.setHeader( 'Content-Type', 'text/plain' );
    res.end( 'Not Found' );
}

function send400( res ) {
    res.statusCode = 400;
    res.setHeader( 'Content-Type' , 'text/plain' );
    res.end( 'BadRequest' );
}

function send500( err , res) {
    res.statusCode = 500;
    res.setHeader( 'Content-Type' , 'text/plain' );
    res.end( 'Internal Server Error : ' + err );
}

server.listen( port );


