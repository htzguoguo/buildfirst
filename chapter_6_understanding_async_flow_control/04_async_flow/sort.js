/**
 * Created by Administrator on 2016/12/28.
 */

var async = require( 'async' ),
    io = require( 'tjx.io' ),
    ids = [ 2, 1, 3 ]
;

async.sortBy(
    ids,
    function ( id, complete ) {
        io.getJson( '/api/user/' + id, function ( data )  {
            complete( null, data.id );
        } )
    },
    function ( err, results ) {
        console.log( results );
    }
);

