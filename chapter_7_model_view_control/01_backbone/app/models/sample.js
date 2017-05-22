/**
 * Created by Administrator on 2017/1/16.
 */

var Backbone = require( 'backbone' ),
    binary = require( '../service/binary' );
module.exports = Backbone.Model.extend( {
    getBinary : function () {
        "use strict";
        var raw = this.get( 'raw' ),
            bin = binary.fromString( raw );
        if ( bin.length > 20 ) {
            return bin.substring( 0, 20 ) + '\u2026';
        }
        return bin;
    },
    isLink : function () {
        "use strict";
        var link = /^https?:\/\/.+/i; // naive test for links
        var raw = this.get( 'raw' );
        return link.test( raw );
    }
} );
