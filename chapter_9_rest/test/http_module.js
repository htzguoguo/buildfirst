/**
 * Created by Administrator on 2017/4/10.
 */

var test = require( 'tape' ),
    http = require( 'http' );

var options = {
    host: '127.0.0.1',
    port : 8180,
    path: '/',
    method: 'GET',
    headers: {
        'Accept': 'text/html'
    }
};
test( 'Get action was requested', function ( t ) {
    "use strict";
    t.plan(2);
    var req = http.request(options, function(res) {
        res.setEncoding('utf8');
        t.equal( res.statusCode, 200 );
        res.on('data', function(data) {
            t.equal( data, 'Get action was requested' );
        });
    });
    req.end();
} );

test( 'bad action was requested', function ( t ) {
    "use strict";
    t.plan(2);
    options.method = 'PATCH';
    var req = http.request( options, function ( res ) {
        res.setEncoding( 'utf8' );
        t.equal( res.statusCode, 400 );
        res.on( 'data', function ( data ) {
            t.equal( data, 'bad requested' );
        }  );
    } );
    req.end();
} );
