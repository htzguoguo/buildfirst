/**
 * Created by Administrator on 2017/4/6.
 */

module.exports = {
    immediate : function ( cb ) {
        "use strict";
        cb( 'foo', 'bar' );
    },
    debounce : function ( cb ) {
        "use strict";
        setTimeout( cb, 1000 );
    }
};
