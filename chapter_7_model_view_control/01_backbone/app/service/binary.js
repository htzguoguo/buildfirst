/**
 * Created by Administrator on 2017/1/16.
 */

function padded( value, size, pad ) {
    "use strict";
    var padding = new Array(  size - value.length  + 1 ).join( pad );
    return padding + value;
}

module.exports = {
    fromString : function ( input ) {
        "use strict";
        var i, binary = '', charCode;
        for ( i = 0; i < input.length; i++ ) {
            charCode = input.charCodeAt( i ).toString(2);
            binary += padded( charCode, 8, 0 );
        }
        return binary;
    }
};
