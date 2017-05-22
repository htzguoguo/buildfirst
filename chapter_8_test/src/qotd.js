/**
 * Created by Administrator on 2017/4/6.
 */

var quote = require( './qotdService' );

quote( function ( err, quote ) {
    "use strict";
    console.log( err, quote );
} );