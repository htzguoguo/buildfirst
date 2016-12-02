/**
 * Created by Administrator on 2016/11/21.
 */

'use strict';

var grunt = require( 'grunt' );

module.exports = function ( credentials, done ) {
    var
        sql = require('msnodesql'),
        util = require( 'util.js' ),
        conn_str = "Driver={SQL Server Native Client 11.0};Server={.};Database={TJX_APP_BuildFirst_20161121};uid=sa;PWD=sa;";
        ;
    grunt.log.write('Connecting to SQL...');
    sql.open(conn_str, function (err, conn) {
        if (err) {
            util.handle(err);
        }
        done( sql );
//这里是查询语句
    });  
};
