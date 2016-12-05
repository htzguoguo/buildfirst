/**
 * Created by Administrator on 2016/12/5.
 */
'use strict';

var logger = require( 'winston' );
var api = module.exports = {};
var levels = [ 'debug', 'info', 'warn', 'error' ];

levels.forEach( function ( level ) {
    api[ level ] = logger[ level ].bind( logger );
} );

logger.add( logger.transports.File, { filename : 'persistent.log' } );