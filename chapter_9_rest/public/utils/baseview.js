/**
 * Created by Administrator on 2017/5/17.
 */

var Backbone = require( 'backbone' ),
    BaseView;

BaseView = module.exports = Backbone.View.extend( {
    destory : function () {
        "use strict";
        this.undelegateEvents();
        this.remove();
    }
} );
