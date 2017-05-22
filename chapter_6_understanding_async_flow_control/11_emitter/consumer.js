/**
 * Created by Administrator on 2017/1/2.
 */

var emitter = require( './emitter' ),
    thing = new emitter();

thing.on( 'change', function ( a, b, c, d ) {
    console.log( 'thing changed.', a, b, c, d );
} );


thing.emit( 'change', 1, 3, 5, 4 );
thing.emit( 'change', 1 );