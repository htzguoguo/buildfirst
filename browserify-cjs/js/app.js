/**
 * Created by Administrator on 2016/12/7.
 */
'use strict';

var text = require( './lib/text.js' );
var tjx = require( './lib/tjx.util.js' );


tjx.init();
var result = text.text( 'too bar' );
console.log( result );
