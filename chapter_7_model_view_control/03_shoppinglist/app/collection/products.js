/**
 * Created by Administrator on 2017/3/22.
 */

var Backbone = require( 'backbone' ),
    Product = require( '../models/product' );

module.exports = Backbone.Collection.extend( {
    model : Product
} );
