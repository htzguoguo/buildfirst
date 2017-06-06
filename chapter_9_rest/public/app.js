/**
 * Created by Administrator on 2017/4/13.
 */

var BackBone = require( 'backbone' ),
    LoginApp = require( './apps/users/app' ),
    ShellLayout = require( './apps/shell/views/shell' ),
    Region = require( './utils/region' ),
    _ = require( 'underscore' ),
    DefaultRouter = null,
    Application = null;


Application = function () {
    "use strict";
    this.Models = {};
    this.Collections = {};
    this.Routers =  {};
    this.currentSubapp = undefined;
    this.shell = undefined;
    this.bodyRegion = new Region( { el : 'body' } );
    this.headerRegion = new Region( { el : '#navbar-main' } );
    this.mainRegion = new Region( { el : '.content-wrapper' } );
    this.footerRegion = new Region( { el : '.tjx-bottom-booter' } );
    this.rightModal = new Region ( { el : '#todo-task-modal' } );
};

global.window.app = new Application();
DefaultRouter = require( './routers/approuters' );
  _.extend( Application.prototype, {
    pubsub :  _.extend( {}, BackBone.Events ),
    start : function () {
        "use strict";
        this.router = new DefaultRouter();
        _.each(_.values(this.Routers), function(Router) {
            new Router();
        });
        BackBone.history.start();
    },
    startSubApplication : function ( SubApplication ) {
        "use strict";

        if ( SubApplication.prototype.constructor ===   LoginApp) {
           if ( this.shell ) {
               this.shell.destroy();
               this.shell = undefined;
           }
          /*  $( '.tjx-top-first-menu' ).hide();
            $( '.tjx-bottom-booter' ).hide();
            $( '#tjx-shell-main' ).hide();*/
        }else {
           if ( ! this.shell ) {
               this.shell = new ShellLayout();
               this.bodyRegion.show( this.shell );
               this.headerRegion =  this.shell.getRegion( 'menu' );
               this.mainRegion = this.shell.getRegion( 'main' );
               this.footerRegion = this.shell.getRegion( 'footer' );
               this.rightModal = this.shell.getRegion( 'rightmodal' );
           }
          /*  $( '.tjx-top-first-menu' ).show();
            $( '.tjx-bottom-booter' ).show();
            $( '#tjx-shell-main' ).show();*/


        }

        if ( this.currentSubapp && this.currentSubapp instanceof  SubApplication) {
            return this.currentSubapp;
        }
        if ( this.currentSubapp && this.currentSubapp.destroy ) {
            this.currentSubapp.destroy();
        }
        this.currentSubapp = new SubApplication( { bodyRegion : this.bodyRegion ,mainRegion : this.mainRegion } );
        return this.currentSubapp;
    }
} );

module.exports = Application;


 
