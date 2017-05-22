/**
 * Created by Administrator on 2017/4/6.
 */

var test = require( 'tape' ),
    sinon = require( 'sinon' ),
    maxwell = require( '../src/maxwell' );


test( 'maxwell.immediate invokes a callback immediately', function ( t ) {
    "use strict";
    var cb = sinon.spy();
    maxwell.immediate( cb );
    t.plan(2);
    t.ok( cb.calledOnce, 'called once' );
    t.ok( cb.calledWith( 'foo', 'bar' ), 'arguments with expection' );
} );

test( 'maxwell.debounce invokes a callback after a timeout', function ( t ) {
    "use strict";
    var clock = sinon.useFakeTimers(),
        cb = sinon.spy();
    maxwell.debounce( cb );
    t.plan(2);
    t.ok( cb.notCalled, 'not called before tick' );
    clock.tick(1000);
    t.ok( cb.called, 'called after tick' );
} );