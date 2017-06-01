/**
 * Created by Administrator on 2017/5/16.
 */

var Backbone = require( 'backbone' ),
    UsersApp = require( '../app' ),
    UserRouters;

UserRouters = module.exports = Backbone.Router.extend( {
    routes : {
        'login' : 'login',
        'users/profile/:id' : 'profile'
    },
    profile : function ( id ) {
        "use strict";
        var app = this.startApp();
        app.ShowProfile();
    },
    login : function () {
        "use strict";
        var app = this.startApp();
        app.ShowLogin();
    },
    startApp : function () {
        "use strict";

        return window.app.startSubApplication( UsersApp );
    }
} );

window.app.Routers.UsersRouter = UserRouters;


