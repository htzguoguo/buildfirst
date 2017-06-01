/**
 * Created by Administrator on 2017/5/24.
 */

var Backbone = require( 'backbone' ),
    App = require( '../app' ),
    MainRouters;

MainRouters = module.exports = Backbone.Router.extend( {
    routes : {
        'main' : 'main'
    },
    main : function ( id ) {
        "use strict";
        var app = this.startApp();
        app.ShowMain();
    },
    startApp : function () {
        "use strict";
        return window.app.startSubApplication( App );
    }
} );

window.app.Routers.MainRouter = MainRouters;