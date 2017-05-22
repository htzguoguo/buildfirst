/**
 * Created by Administrator on 2017/4/13.
 */

var $ = require( 'jquery' ),
    _ = require( 'underscore' ),
    BackBone = require( 'backbone' ),
    App = require( './app' );

BackBone.$ = $;

$( document ).ready( function () {
    "use strict";

    global.window.app.start();
} );
