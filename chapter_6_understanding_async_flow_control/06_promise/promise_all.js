/**
 * Created by Administrator on 2016/12/29.
 */

var Promise = require( 'es6-promise' ).Promise,
    io = require( './tjx_io_promise' );
    /*tjx_io = require( 'tjx.io' )
    ;*/

function getUser( id ) {
   return io.getJson( '/api/user/' + id );
}

function getUsers( id ) {
    return io.getJson( '/api/users/list' );
}

function sendUser( name ) {
  /*  return new Promise( function ( fulfill, reject ) {
        tjx_io.postJson(  '/api/user', { name : name, age : 22 }, fulfill );
    } );*/
    return io.sendJson( '/api/user', { name : name, age : 22 } )
}
getUser( 100 ).then( function ( results ) {
    console.log( results );
} , function ( error ) {
    console.log( error );
} );

Promise.all( [ sendUser( 'cat' ), sendUser( 'dog' ), sendUser( 'bird' ), getUser( 100 )] ).then( function ( results ) {
    console.log( results );
} , function ( error ) {
    console.log( error );
});


/*Promise.all( [ getUser(1), getUser(2), getUser(3) ] ).then( function ( results ) {
    console.log( results );
} );*/
