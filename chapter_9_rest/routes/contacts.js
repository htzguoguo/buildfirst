/**
 * Created by Administrator on 2017/4/11.
 */

var express = require( 'express' ),
    router = express.Router(),
    url = require( 'url' );
    contacts = require( '../modules/contacts_mongodb' );

function internalServerError ( res ) {
    "use strict";
    res.writeHead( 500, { 'Content-Type' : 'text/plain' } );
    res.end( 'Internal server error' );
}


router.get( '/', function ( req, res, next ) {
    "use strict";
    var get_params = url.parse( req.url, true ).query,
        key, value;
    if ( Object.keys( get_params ).length === 0 ) {
        contacts.list( res );
    }else {
        key = [], value= [];
        Object.keys( get_params ).forEach( function ( para ) {
            key.push( para );
            value.push( get_params[ para ] );
        } );
        contacts.query_by_arg( key, value, res);
    }
} );

router.get( '/:number', function ( req, res, next ) {
    "use strict";
    contacts.query( req.params.number, res );

  /*  contacts.query( req.params.number , function( error, data ) {
        if ( error ) {
            res.writeHead( 500, { 'Content-Type' : 'text/plain' } );
            res.end( 'Internal server error' );
        }else {
            if ( !data ) {
                res.writeHead( 404, { 'Content-Type' : 'text/plain' } );
                res.end( 'Not Found' );
            }else {
                res.setHeader(
                    'Content-Type' , 'application/json'
                );
                res.end( JSON.stringify( data ) );
            }
        }
    } );*/

} );

router.patch( '/', function ( req, res, next ) {
    "use strict";
    contacts.update(  req.body,  res );
} );

router.put( '/', function ( req, res, next ) {
    "use strict";
    contacts.update( req.body,  res);
} );

router.delete( '/:number', function ( req, res, next ) {
    "use strict";
    contacts.remove( req.params.number, res);
} );

router.get( '/:arg/:value', function (  req, res, next) {
    "use strict";
    contacts.query_by_arg( req.params.arg, req.params.value, res);
} );


module.exports = router;