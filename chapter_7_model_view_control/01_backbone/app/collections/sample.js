/**
 * Created by Administrator on 2017/1/25.
 */

var Backbone = require( 'backbone' ),
    CollectionModel = require( '../models/collection' );

module.exports = Backbone.Collection.extend( {
    model : CollectionModel
} );
