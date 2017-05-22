/**
 * Created by Administrator on 2016/12/7.
 */

require( [ 'lib/textup', 'lib/textdown' ], function (up, down ) {
    var result = up( 'too bar 123' );
    console.log( result );

    var res = down( 'UUUPP' );
    console.log( res );
} );
