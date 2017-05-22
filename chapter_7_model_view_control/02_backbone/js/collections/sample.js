/**
 * Created by Administrator on 2017/3/22.
 */

var Backbone = require( 'backbone' ),
    CollectionModel = require( '../models/book' );

module.exports = Backbone.Collection.extend( {
    model : CollectionModel
} );
