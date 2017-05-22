/**
 * Created by Administrator on 2016/12/7.
 */

module.exports = function () {
    var $ = require( 'jquery' );

    return {
        text : function ( text ) {
            var txt = $( '#id' );
            txt.html( text );
            return text.toUpperCase();
        }
    }
};

