/**
 * Created by Administrator on 2017/3/30.
 */

var BaseClientRouter = require( 'rendr/client/router' ),
    Router = module.exports = function Router( options ) {
        "use strict";
        BaseClientRouter.call( this, options );
    };

Router.prototype = object.create( BaseClientRouter.prototype );
Router.prototype.constructor = BaseClientRouter;

