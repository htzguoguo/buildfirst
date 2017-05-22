/**
 * Created by Administrator on 2017/4/6.
 */

var test = require( 'tape' ),
    sinon = require( 'sinon' );

test( 'qotd service should make a XHR call', function ( t ) {
    "use strict";
    var quote = require( '../src/qotdService' ),
        cb = sinon.spy()
       ;

    quote(cb);
    t.plan(2);
    setTimeout( function () {
        t.ok( cb.called  );
        t.ok( cb.calledWith( null, sinon.match.string ) );
    }, 2000 );
} );

test( 'qotd service should make a XHR call with fake server', function ( t ) {
    "use strict";
    var quote = require( '../src/qotdService' ),
        cb = sinon.spy(),
        server = sinon.fakeServer.create(),
        headers = { 'Content-Type' : 'text/html' };
    quote( cb );
    t.plan(4);
    t.equal( server.requests.length, 1 );
    t.ok( cb.notCalled );
    server.requests[ 0 ].respond( 200,  headers, 'The cake is a lie' );
    t.ok( cb.called );
    t.ok( cb.calledWith( null, 'The cake is a lie' ) );
} );



