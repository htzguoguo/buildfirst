/**
 * Created by Administrator on 2016/12/8.
 */

var app = angular.module( 'buildfirst' );

app.controller(
    'testcontroller',
    [
        'testservice',
        function ( text ) {
            var result  = text( 'too bar' );
            console.log( result );
        }
    ]
);
