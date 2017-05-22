/**
 * Created by Administrator on 2017/3/22.
 */

var $ = require( 'jquery' ),
    _ = require( 'underscore' ),
    Backbone = require( 'backbone' ),

    AppRouter = require( './routers/approuter' );
new AppRouter();
Backbone.$ = $;



$( document ).ready( function () {
    "use strict";
    Backbone.history.start();
} );


