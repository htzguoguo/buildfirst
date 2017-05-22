/**
 * Created by Administrator on 2017/4/6.
 */

var test = require( 'tape' ),
    emitter = require( '../src/emitter' );

test( 'emitter(thing) should be a function', function ( t ) {
    "use strict";
    t.ok( emitter, 'should be truthy' );
    t.ok( typeof emitter === 'function', 'should be a method');
    t.end();
} );


test( 'emitter(thing) should always return an emitter', function ( t ) {
    "use strict";
    isEmitter( emitter() );
    isEmitter( emitter( [] ) );
    isEmitter( emitter( {} ) );
    function isEmitter( thing ) {
        t.ok( thing, 'should be truthy' );
        t.ok( thing.on, 'should have on property' );
        t.ok( thing.emit, 'should have emit property' );
    }
    t.end();
} );

test( 'emitter(thing) should reference the same object', function ( t ) {
    "use strict";
    var thing = { a : 1 };
    var data = emitter( thing );
    t.equal( thing, data );
    t.end();
} );

test( 'emitter(thing) should reference the same array', function ( t ) {
    "use strict";
    var data = [ 3, 4 ];
    var thing = emitter( data );
    t.equal( data, thing  );
    t.end();
}  );

test( 'on( type, listener ) should attach an event listener', function ( t ) {
    "use strict";
    var thing = emitter(),
        listener = function () {

        };
    t.doesNotThrow( function () {
        thing.on( 'foo', listener );
    } );
    t.end();
} );

test( 'on( type, listener ) should attach many event listeners to the same event', function ( t ) {
    "use strict";
    var thing = emitter(),
        listener = function () {

        };
    t.doesNotThrow( function () {
        thing.on( 'foo', listener );
        thing.on( 'foo', listener );
        thing.on( 'foo', listener );
    } );
    t.end();
} );

test( 'emit( type ) should emit to event listeners', function ( t ) {
    "use strict";
    var thing = emitter(),
        listens = 0,
        listener;
    listener = function () {
        listens++;
    };
    thing.on( 'foo', listener );
    thing.on( 'foo', listener );
    thing.emit( 'foo' );
    t.equal( listens, 2 );
    t.end();
} );

test( 'emit(type) should pass params to event listeners', function ( t ) {
    "use strict";
    var thing = emitter(),
        listens = 0,
        listener;
    listener = function ( context, value ) {
        t.equal( arguments.length, 2 );
        t.equal( context, thing );
        t.equal( value, 3 );
        listens++;
    };
    thing.on( 'foo', listener );
    thing.on( 'foo', listener );
    thing.emit( 'foo',thing, 3 );
    t.equal( listens, 2 );
    t.end();
} );

