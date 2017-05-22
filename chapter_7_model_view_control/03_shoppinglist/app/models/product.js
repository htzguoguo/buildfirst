/**
 * Created by Administrator on 2017/3/22.
 */

var Backbone = require( 'backbone' );

module.exports = Backbone.Model.extend( {
    name : '',
    quantity : 0,
    validate : function ( attrs ) {
        "use strict";
        if ( ! attrs.name ) {
            return 'Please input the name of the item.';
        }
        if ( typeof attrs.quantity !== 'number' || isNaN( attrs.quantity )) {
            return 'The Quantity must be numeric.';
        }
        if ( attrs.quantity < 1 ) {
            return 'you should keep your product to yourself.';
        }
    },
    addToOrder : function ( quantity ) {
        "use strict";
        this.set( 'quantity', this.get( 'quantity' ) + quantity, { validate : true } );
    }
} );
