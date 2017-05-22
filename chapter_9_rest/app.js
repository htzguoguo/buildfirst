var express = require( 'express' ),
    session = require( 'express-session' ),
    cookieParser = require( 'cookie-parser' ),
    path = require( 'path' ),
    logger = require( 'morgan' ),
    bodyParser = require( 'body-parser' ),
    errorHandler = require( 'errorhandler' ),

    routes = require( './routes/index' ),
    apirouter_v1 = require( './routes/api_v1' ),
    apirouter_v2 = require( './routes/api_v2' ),
    admin = require( './modules/user' ),
    authrouter = require( './routes/auth' ),

    app = express(),
    port = process.env.PORT || 8180,
    staticPath = path.join( __dirname, 'public' );



// view engine setup
app.set( 'views', path.join( __dirname , 'views' ) )
app.set( 'view engine', 'jade' );



app.use( logger( 'dev' ) );
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded( { extended : false } ) );

app.use(cookieParser('login'));
app.use(session());

app.use( express.static( staticPath ) );
app.use( '/', routes );
app.use( '/auth', authrouter );
app.use( '/api/v1', admin.authorize,  apirouter_v1 );
app.use( '/api/v2', admin.authorize, apirouter_v2  );

//catch 404 and forward to error handler
app.use( function ( request, response, next ) {
    "use strict";
    var err = new Error( 'not found' );
    err.status = 404;
    next( err );
} );

// error handlers

// development error handler
// will print stacktrace
if ( app.get( 'env' ) === 'development' ) {
    app.use( errorHandler() );

    app.use( function ( error, request, response, next ) {
        "use strict";
        response.status( error.status || 500 );
        response.render( 'error', {
            message : error.message,
            error : error
        } );
    } );
}

// production error handler
// no stacktraces leak to user
app.use( function ( error, request, response, next ) {
    "use strict";
    response.status( error.status || 500 );
    response.render( 'error', {
        message : error.message,
        error : {}
    } );
} );

module.exports = app;

app.listen( port );
