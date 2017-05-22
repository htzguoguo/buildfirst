/**
 * Created by Administrator on 2017/5/22.
 */

/**
 * Created by Administrator on 2017/5/16.
 */

var Backbone = require( 'backbone' ),
    ContactApp = require( '../app' ),
    ContactsRouters;

ContactsRouters = module.exports = Backbone.Router.extend( {
    routes : {
        'contacts/:id' : 'profile'
    },
    profile : function ( id ) {
        "use strict";
        var app = this.startApp();
        app.ShowContract( encodeURIComponent(id) );
    },
    startApp : function () {
        "use strict";
        return window.app.startSubApplication( ContactApp );
    }
} );

window.app.Routers.ContactsRouter = ContactsRouters;



