/**
 * Created by Administrator on 2017/3/30.
 */

var express = require( 'express' ),
    app = express(),
    rendr = require( 'rendr' ),
    port = process.env.PORT || 3000,
    rendrServer;

rendrServer = rendr.createServer( {
    dataAdapterConfig: {
        default : {
            host : 'api.github.com',
            protocol : 'https'
        }
    }
} );



app.use( express.static( __dirname + '/public' ) );
app.use( express.bodyParser() );
app.use( rendrServer );
app.listen( port, function () {
    "use strict";
    console.log( 'listening on port %s', port );
} );
