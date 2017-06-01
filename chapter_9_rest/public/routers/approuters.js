/**
 * Created by Administrator on 2017/4/14.
 */
var BackBone = require( 'backbone' ),
    UserRouter = require( '../apps/users/routers/userrouters' ),
    ContactRouter = require( '../apps/contacts/routers/contactsrouter' ),
    MainRouter = require( '../apps/shell/routers/shellrouter' );


module.exports = BackBone.Router.extend( {
    routes : {
        '' : 'root'
    },
    root : function () {
        this.navigate( 'login', { trigger : true } );
    }
} );
