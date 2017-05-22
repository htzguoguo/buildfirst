/**
 * Created by Administrator on 2016/12/29.
 */

var io = require( './tjx_io_promise' );

io.getJson( 'https://api.github.com/users' )
    .then( JSON.parse )
    .then( function ( response ) {
        return io.getJson( 'https://api.github.com/users/' + response[ 0 ].login + '/repos' );
    } )
    .then( JSON.parse )
    .then( function ( response ) {
        console.log( response[ 0 ].name );
    }  );

