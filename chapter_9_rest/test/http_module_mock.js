/**
 * Created by Administrator on 2017/4/10.
 */

var test = require( 'tape' ),
    sinon = require( 'sinon' ),
    httpModule = require( '../modules/http_module' ),
    response = { writeHead : function () {}, end : function () {} },
    responseMock = sinon.mock( response ),
    request = {  },
    requestMock = sinon.mock( request );

test( 'Get action was requested', function ( t ) {
    "use strict";
    responseMock.expects( 'end' ).once().withArgs( 'Get action was requested' );
    requestMock.method = "GET";
    httpModule.Handle_request( requestMock, response );

    t.ok( responseMock.verify() );
    t.end();
} );


