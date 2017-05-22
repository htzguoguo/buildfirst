/**
 * Created by Administrator on 2017/3/30.
 */

var $ = require( 'jquery' ),
    Task = require( './model/task' ),
    TaskCollection = require( './collection/TaskCollection' ),
    TaskView = require( './view/taskview' ),
    TaskCollectionView = require( './view/TaskCollectionView' ),
    tasks, tasklist;

$( function () {
    "use strict";

    $( '#start' ).click( function () {
        tasks = new TaskCollection( );
        tasklist = new TaskCollectionView(  {
            collection : tasks,
            el : '#tasklist'
        });
        tasklist.render();
        tasks.add( { id : 1 , summary : 5, description : 'a' } );
        tasks.add( { id : 2 , summary : 6, description : 'b' } );
        tasks.add( { id : 3 , summary : 7, description : 'c' } );
        tasks.add( { id : 4 , summary : 8, description : 'd' } );
    } );

    $( '#sort' ).click( function () {
        tasklist.listenToOnce( tasks, 'sort', tasklist.render );
        tasks.sort();
    } );
} );


