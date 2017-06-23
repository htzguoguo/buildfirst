/**
 * Created by Administrator on 2017/4/17.
 */

var express = require( 'express' ),
    Passport = require( 'passport' ),
    router = express.Router(),
    admin = require( '../modules/user' );

/*router.post( '/', Passport.authenticate( 'login' ) );*/



router.post( '/', admin.login );

router.delete( '/', admin.logout );



module.exports  = router;
