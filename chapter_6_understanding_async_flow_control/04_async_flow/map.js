/**
 * Created by Administrator on 2016/12/27.
 */

var async = require( 'async' ),
    tjx_io = require( 'tjx.io' ),
    userid = [ 1, 2, 3 ]
;

async.map( userid, transform, done );

function transform( id, complete ) {
    tjx_io.getJson( '/api/user/' + id, function ( data ) {
        complete( null, data );
    } );
}

function done( err, results ) {
    console.log( results );
}


