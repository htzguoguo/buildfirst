/**
 * Created by Administrator on 2016/11/21.
 */

/**
 * Created by Administrator on 2016/11/21.
 */



( function (  ) {
    'use strict';
    var member = 0;
    window.foo = {
        bar : function () {
            return member;
        },
        inc : function () {
            member++;
        },
        set : function ( value ) {
            member = value;
        }
    };

} )( window );

/**
 * Created by Administrator on 2016/11/20.
 */

( function () {
    'use strict';
    console.log( 'Hello world from something-else.js' );
} )();

/**
 * Created by Administrator on 2016/11/20.
 */

( function () {
    'use strict';
    
    console.log( 'Hello world from something.js' );
} ) ();
