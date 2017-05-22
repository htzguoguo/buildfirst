/**
 * Created by Administrator on 2016/11/9.
 */

/*
 * routes.js - Hello World
 */
/*jslint node : true, continue : true,
 devel : true, indent : 2, maxerr : 50,
 newcap : true, nomen : true, plusplus : true,
 regexp : true, sloppy : true, vars : false,
 white : true
 */
/*global */

// --------------------------------- BEGIN MODULE SCOPE VARIABLES -------------------------------
'use strict';
var configRoutes,
    mongodb = require( 'mongodb' ),
    mongoServer = new mongodb.Server( 'localhost',27017 ),
    dbHandler = new mongodb.Db( 'spa', mongoServer, { safe : true } )
    ;
/*var MongoClient = require('mongodb').MongoClient
    , assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/myproject';

// Use connect method to connect to the server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected successfully to server");

    db.close();
});*/


dbHandler.open( function () {
    console.log( 'Connected to MongoDB' );
} );
// --------------------------------- END MODULE SCOPE VARIABLES ---------------------------------

// --------------------------------- BEGIN PUBLIC METHODS ------------------------------------------
configRoutes = function ( app, server ) {
    app.all( '/:obj_type/*?', function ( request, response, next ) {
        response.contentType( 'json' );
        next();
    } );

    app.get( '/', function ( request, response ) {
        response.redirect( '/request-on-request/test.html' );
    }  );
    app.get( '/:obj_type/list', function ( request, response ) {
        response.send( { title : request.params.obj_type +  ' list' } );
    } );
    app.post( '/:obj_type/create', function ( request, response ) {
        console.log( request.body.username );
        response.send( { title : request.params.obj_type + '  created' } );
    } );
    app.get( '/:obj_type/read/:id([0-9]+)', function ( request, response ) {
        response.send( { title :  request.params.obj_type + ' with id ' + request.params.id + ' found' } );
    } );
    app.post( '/:obj_type/update/:id([0-9]+)', function ( request, response ) {

        response.send( { title : request.params.obj_type + ' with id ' + request.params.id + ' updated' } );
    } );
    app.post( '/:obj_type/delete/:id([0-9]+)', function ( request, response ) {
        response.send( { title : request.params.obj_type + '  with id ' + request.params.id + ' deleted' } );
    } );

    app.get( '/userbyemail/:email', function ( request, response ) {
        response.send( { email : request.params.email , region : 'china' } );
    } );

    app.get( '/regions/:reg', function ( request, response ) {
        response.send( { region : request.params.reg , id : '2233' } );
    } );

    app.get( '/client/:id', function ( request, response ) {
        response.send( { id : request.params.id , name : 'jake' } );
    } );
};

module.exports = { configRoutes : configRoutes };

// --------------------------------- END PUBLIC METHODS --------------------------------------------





