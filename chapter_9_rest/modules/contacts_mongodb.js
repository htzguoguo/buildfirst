/**
 * Created by Administrator on 2017/4/25.
 */

var mongoose = require( 'mongoose' ),
    Contact = require( './schema/contact' ),
    helper = require( './http_helper' ),
    key = 'primarycontactnumber'

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
                 helper.ResourceCreated( res );
             }else {
                 toExistContact( data, newcontact );
                 data.save( function ( error ) {
                     if ( ! error ) {
                         data.save();
                     }
                     helper.ResourceUpdated( res );
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
}

function toNewContact( body ) {
    "use strict";
    //console.log( body );
    return new Contact(
        {
            primarycontactnumber : body.primarycontactnumber,
            name: body.name,
            address: body.address,
            birthdate: body.birthdate,
            phones: body.phones,
            emails: body.emails,
            facebook: body.facebook,
            twitter: body.twitter,
            github: body.github,
            google: body.google
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








