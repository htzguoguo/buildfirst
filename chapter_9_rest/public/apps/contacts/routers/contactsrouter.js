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
        'contacts/view/:id' : 'profile',
        'contacts' : 'list'
    },
    profile : function ( id ) {
        "use strict";
        var app = this.startApp();
        app.showContactById( id );
    },
    list : function () {
        "use strict";
        var app = this.startApp();
        app.ShowContactList(  );
    },
    startApp : function () {
        "use strict";
        return window.app.startSubApplication( ContactApp );
    }
} );

window.app.Routers.ContactsRouter = ContactsRouters;



