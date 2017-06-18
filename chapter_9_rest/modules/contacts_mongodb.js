/**
 * Created by Administrator on 2017/4/25.
 */

var mongoose = require( 'mongoose' ),
    Contact = require( './schema/contact' ),
    fs = require( 'fs' ),
    Path = require( 'path' ),
    crispy = require( 'crispy-string' ),
    _ = require( 'underscore' ),
    helper = require( './http_helper' ),
    key = 'primarycontactnumber',
    AVATAR_PATH =   './avatar',
    ID_LENGTH = 10
    ;

mongoose.connect( 'mongodb://localhost/contacts' );

module.exports.query = function ( number, res ) {
    "use strict";
     Contact.findOne( { primarycontactnumber : number }, function ( error, data ) {
         if ( error ) {
             helper.InternalServerError( res, error, { primarycontactnumber :  contact.primarycontactnumber } );
         }else {
             if ( ! data ) {
                 helper.ResourceNotFound( res , { primarycontactnumber : number });
             }else {
                 helper.ResourceFound( res, data );
             }
         }
     } );
};

module.exports.update = function ( contact, res ) {
    "use strict";
    var newcontact;
     Contact.findOne( { primarycontactnumber : contact.primarycontactnumber }, function ( error, data ) {
         if ( error ) {
             helper.InternalServerError( res, error, { primarycontactnumber :  contact.primarycontactnumber } );
         }else {
             newcontact = toNewContact( contact );
             if ( !data ) {
                 newcontact.save( function ( error ) {
                     if ( ! error ) {
                         newcontact.save();
                     }
                 } );
                 helper.ResourceCreated( res, newcontact );
             }else {
                 toExistContact( data, newcontact );
                 data.save( function ( error ) {
                     if ( ! error ) {
                         data.save();
                     }
                     helper.ResourceUpdated( data );
                 } );
             }
         }
     } );
}; 

function toExistContact( data, contact ) {
    "use strict";
    data.primarycontactnumber = contact.primarycontactnumber;
    data.name = contact.name;
    data.address = contact.address;
    data.birthdate = contact.birthdate;
    data.phones = contact.phones;
    data.emails = contact.emails;
    data.facebook = contact.facebook;
    data.twitter = contact.twitter;
    data.github = contact.github;
    data.google = contact.google;
    data.avatar = contact.avatar;
}

function makeId() {
    return crispy.base32String(ID_LENGTH);
}

function toNewContact( body ) {
    "use strict";
    //console.log( body );
    return new Contact(
        {
            primarycontactnumber : makeId(),
            name: body.name,
            address: body.address,
            birthdate: body.birthdate,
            phones: body.phones,
            emails: body.emails,
            facebook: body.facebook,
            twitter: body.twitter,
            github: body.github,
            google: body.google,
            avatar:body.avatar
        });
}

module.exports.remove = function ( number, res ) {
    "use strict";
    Contact.findOne( { primarycontactnumber : number }, function ( error, data ) {
         if ( error ) {
             helper.InternalServerError( res, error, { primarycontactnumber : number } );

         }else {
             if ( ! data ) {
                 helper.ResourceNotFound( res , { primarycontactnumber : number });
             }else {
                data.remove( function ( error ) {
                    if ( error ) {
                        helper.InternalServerError( res, error, { primarycontactnumber : number } );
                    }else {
                        data.remove();
                        helper.ResourceDeleted( res );
                    }
                } );
             }
         }
    } );
};

module.exports.query_by_arg = function ( arg, value, res ) {
    "use strict";
    var filter = {};
    if ( arg instanceof Array ) {
        arg.forEach( function ( a, index ) {
            filter[ a ] = value[ index ];
        })
    }else {
        filter[ arg ] = value;
    }
    Contact.find( filter, function ( error, data ) {
        if ( error ) {
            helper.InternalServerError( res, error, { arg : arg, value : value } );
        }else {
            if ( ! data ) {
                helper.ResourceNotFound( res, { arg : arg, value : value } );
            }else {
                helper.ResourceFound( res, data );
            }
        }
    });
};

module.exports.list = function ( res ) {
    "use strict";
    Contact.find( {}, function ( error, data ) {
        if ( error ) {
            helper.InternalServerError( res );
        }else {
            helper.ResourceFound( res, data );
        }
    } );
};

module.exports.uploadAvatar = function ( req, res, next ) {
    var number = req.params.number,
        fileName, fullPath, metaData,
        extension, wstream;
    if ( !_.has( req, 'file' ) && !_.has( req, 'files' ) ) {
      return  helper.BadRequest( res, 'Please upload a file in the avatar field', '' );
    }
    metaData = req.files;
    if ( metaData && metaData.length > 0 ) {
        metaData = metaData[0];
    }

    if ( ! isValidImage(metaData.mimetype) ) {
        helper.BadRequest( res, 'Invalid format, please use png,jpg or gif file', '' );
        return next();
    }
    Contact.findOne( { primarycontactnumber : number }, function ( error, data ) {
        if ( error ) {
            helper.InternalServerError( res, 'contact not found', { primarycontactnumber : number } );
        }else {
            if ( ! data ) {
                helper.ResourceNotFound( res , { primarycontactnumber : number });
                return next();
            }else {
                if ( ! fs.existsSync( AVATAR_PATH ) ) {
                    fs.mkdirSync( AVATAR_PATH );
                }
                extension =getExtension( metaData.originalname );

                console.log('metaData', metaData );
               // fileName = metaData.filename;
                do {
                    fileName = generateFileName( 25, extension );
                    fullPath = generateFullPath( fileName );
                } while( fs.existsSync( fullPath ) )
                removeAvatar( data );
                wstream = fs.createWriteStream( fullPath );

                console.log('metaData.buffer', metaData.buffer );
                wstream.write( metaData.buffer );
                wstream.end();

                data.avatar = {
                    file : fileName,
                    url :  generateURLForAvatar( fileName)
                };
                data.save( function ( error ) {
                    if ( ! error ) {
                        data.save();
                    }
                    helper.ResourceUpdated( res, data );
                } );
            }
        }
    } );
};

function isValidImage( mimetype ) {
    return /jpeg|png|gif/.test(mimetype);
}

function getExtension( filename ) {
    return Path.extname( filename );
}

function generateFileName(len,  extension ) {
    return crispy.base32String(len) + extension;
}

function generateFullPath( filename ) {
    return AVATAR_PATH + '/' + filename
}

function removeAvatar( contact ) {
    var currentAvatarPath;
    if ( _.has( contact, 'avatar.file' ) ) {
        currentAvatarPath = generateFullPath( contact.avatar.file );
        if ( fs.existsSync( currentAvatarPath ) ) {
            fs.unlinkSync( currentAvatarPath );
        }
    }
}

function generateURLForAvatar( filename ) {
    return 'avatar/' + filename
}

/*function generateURLForAvatar(filename) {
    return 'http://localhost:3000/avatar/' + filename;
}*/









