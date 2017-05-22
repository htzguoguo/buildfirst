/**
 * Created by Administrator on 2016/12/27.
 */

var async = require( 'async' );
var tjx_io = require( 'tjx.io' );

async.parallel(
    {
       user1 : function ( next ) {
           tjx_io.postJson( '/api/user',{ name : 'cat', age : 1 } , function (data) {
               next( null, data );
           }   );
        },
        user2 : function ( next ) {
            tjx_io.postJson( '/api/user',{ name : 'dog', age : 2 } , function (data) {
               next( null, data );
            }   );
        },
        user3 : function ( next ) {
            tjx_io.postJson( '/api/user',{ name : 'dog', age : 3 } , function (data) {
                next( null, data );
            }   );
        },
        user4 : function ( next ) {
            tjx_io.postJson( '/api/user',{ name : 'dog', age : 4 } , function (data) {
                next( null, data );
            }   );
        },
        user5 : function ( next ) {
            tjx_io.postJson( '/api/user',{ name : 'dog', age : 5 } , function (data) {
                next( null, data );
            }   );
        },
        user6 : function ( next ) {
            tjx_io.postJson( '/api/user',{ name : 'dog', age : 6 } , function (data) {
                next( null, data );
            }   );
        },
       users : function ( next ) {
           tjx_io.getJson( '/api/users/list', function (data) {
               next( null, data );
           });
        }
    },
    function ( err, results ) {
        if ( results ) {
            console.log( results);
        }
    }
);
