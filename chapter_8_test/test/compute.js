/**
 * Created by Administrator on 2017/4/5.
 */

var test = require( 'tape' ),
    compute = require( '../src/compute' );

test( 'compute() should be multiply by 555', function ( t ) {
    "use strict";
    t.assert( 555, compute(1) );
    t.end();
} );



