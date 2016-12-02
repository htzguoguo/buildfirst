/**
 * Created by Administrator on 2016/11/21.
 */

'use strict';

var
    path = require( 'path' ),
    http = require( 'http' ),
    fs = require( 'fs' ),
    app
    ;
app = http.createServer( function ( request, response ) {
    var url = request.url === '/' ? '/views/home.html' : request.url;
    var filename = path.join( process.cwd(), 'build' + url );
    fs.readFile( filename, {   }, function ( err, html ) {
        response.writeHead( 200 );
        response.end( html );
    } );

} );

app.listen( 3000, function () {
    console.log( 'app listening on http://localhost:3000/' );
} );
