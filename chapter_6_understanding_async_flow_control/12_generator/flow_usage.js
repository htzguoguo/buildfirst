/**
 * Created by Administrator on 2017/1/8.
 */

var flow = require( './flow.js' );

function get( next )  {
    "use strict";
    setTimeout( function () {
        next( null, [ 'bacon', 'type', 'cripple' ] );
    }, 1000 );
}

flow( function* ( next ) {
    console.log( 'fetching food types...' );
    var types = yield  get;
    console.log( 'waiting around...' );
    yield setTimeout( next, 2000 );
    console.log( types.join( ', ' ) );
} );
