/**
 * Created by Administrator on 2016/12/8.
 */

var app = angular.module( 'buildfirst' );
app.factory(
    'testservice',
    [
        function () {
            return function ( text ) {
                return text.toUpperCase();
            }
        }
    ]
);