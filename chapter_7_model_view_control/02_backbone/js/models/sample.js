/**
 * Created by Administrator on 2017/3/22.
 */

var Backbone = require( 'backbone' ),
    binary = require( '../service/binary' );

module.exports = Backbone.Model.extend( {
    isLink : function () {
        "use strict";
        var link = /^https?:\/\/.+/i,
            raw = this.get( 'raw' );
        return link.test( raw );
    },
    getBinary : function ( ) {
        "use strict";
        var raw = this.get( 'raw' ),
            bin = binary.fromString( raw );
        if ( raw.length > 0 ) {
            return bin.substring( 0, 20 ) + + '\u2026';
        }
        return bin;
    }
} );
