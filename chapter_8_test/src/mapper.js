/**
 * Created by Administrator on 2017/4/6.
 */

var User = require( './models/User' );

function subset( user ) {
    "use strict";
    return {
        name : user.name,
        email : user.email
    };
}

module.exports = function ( id, done ) {
    "use strict";
    User.findOne( { id : id }, function ( err, user ) {
        done( err, user ? subset( user ) : null );
    } );
};
