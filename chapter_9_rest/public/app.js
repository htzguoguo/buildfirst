/**
 * Created by Administrator on 2017/4/13.
 */

var BackBone = require( 'backbone' ),
    _ = require( 'underscore' ),
    DefaultRouter = null,
    Application = null;

Application = function () {
    "use strict";
    this.Models = {};
    this.Collections = {};
    this.Routers =  {};
};



global.window.app = new Application();
DefaultRouter = require( './routers/approuters' );


  _.extend( Application.prototype, {
    pubsub :  _.extend( {}, BackBone.Events ),
    start : function () {
        "use strict";
        console.log( 'Routers', this.Routers );
        this.router = new DefaultRouter();

        _.each(_.values(this.Routers), function(Router) {
            new Router();
        });
        BackBone.history.start();
    },
    startSubApplication : function ( SubApplication ) {
        "use strict";
        if ( this.currentSubapp && this.currentSubapp instanceof  SubApplication) {
            return this.currentSubapp;
        }
        if ( this.currentSubapp && this.currentSubapp.destory ) {
            this.currentSubapp.destory();
        }
        this.currentSubapp = new SubApplication( { region : '' } );
        return this.currentSubapp;
    }
} );

module.exports = Application;


 
