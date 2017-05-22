/**
 * Created by Administrator on 2017/4/6.
 */

var test = require( 'tape' ),
    sinon = require( 'sinon' ),
    proxyquire = require( 'proxyquire' ),
    user = {
        id : 123,
        name : 'marin',
        email : 'marin@company.com'
    };
var mapperMock = {
    './models/User.js' : {
        findOne : function ( query, done ) {
            "use strict";
            setTimeout( done.bind( null, null, user ) );
        }
    }
};

test( 'user mapper return a subset of user', function ( t ) {
    "use strict";
    var mapper = proxyquire( '../src/mapper.js', mapperMock ),
        clock = sinon.useFakeTimers(),
        cb = sinon.spy();
    mapper( 123, cb );
    clock.tick(0);
    var result = cb.args[0][1];
    var actual = Object.keys( result ).sort();
    var expected = [ 'name', 'email' ].sort();

    t.plan(2);
    t.ok( cb.calledOnce, 'called once' );
    t.deepEqual( actual, expected );
} );

