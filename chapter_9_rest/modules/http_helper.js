/**
 * Created by Administrator on 2017/4/25.
 */

module.exports.InternalServerError = function ( res, error, context ) {
    "use strict";
    var result = {
        "error": {
        "code": "bf-500",
        "message":  error,
        "context":  context
    }
    };
    res.status( 500 );
    res.setHeader( 'Content-Type', 'text/plain' );
    res.send( result );
};

module.exports.ResourceNotFound = function ( res, context ) {
    "use strict";
    var result = {
        "error": {
            "code": "bf-404",
            "message": 'Not Found',
            "context":  context
        }
    };
    res.status( 404 );
    res.setHeader( 'Content-Type', 'text/plain' );
    res.end();
};

module.exports.ResourceDeleted = function ( res ) {
    "use strict";
    res.status( 204 );
    res.end();
};

module.exports.ResourceCreated = function ( res, tip ) {
    "use strict";
    res.status( 201 );
    res.setHeader( 'Content-Type', 'application/json' );
    if ( tip ) {
        res.send( { "data" : tip } );
    }else {
        res.send( { "data" : 'Created' }  );
    }
};

module.exports.ResourceUpdated = function ( res, tip ) {
    "use strict";
    res.status( 201 );
    res.setHeader( 'Content-Type', 'application/json' );
    if ( tip ) {
        res.send(  { "data" : tip } );
    }else {
        res.send( { "data" : 'Updated'} );
    }
};

module.exports.ResourceFound = function ( res, data ) {
    "use strict";
    var result = data;
    res.status( 200 );
    res.setHeader( 'Content-Type', 'application/json' );
    res.send(  result   );
   /* res.end();*/
   /* res.end();*/
};


