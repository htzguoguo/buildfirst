/**
 * Created by Administrator on 2017/5/21.
 */

var App;

App = module.exports = function ( options ) {
    "use strict";
    var currentController = null,
        region = options.region;

    this.startController = function ( controller ) {
        if ( currentController && currentController instanceof  controller) {
            return currentController;
        }
        if ( currentController && currentController.destory ) {
            currentController.destory();
        }
        currentController = new controller( { region : region } );
        return currentController;
    };
};
