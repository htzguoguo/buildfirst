/**
 * Created by Administrator on 2016/12/28.
 */


var async = require( 'async' ),
    io = require( 'tjx.io' ),
    p
    ;
p = async.queue(
    function ( id, done ) {
        io.getJson( '/api/user/' + id, function ( data ) {
            done( null, data );
        } );
    },
    1 );

p.push( 1, done );

p.push( 2, done );

function done( err, result ) {
    console.log( result );
}

