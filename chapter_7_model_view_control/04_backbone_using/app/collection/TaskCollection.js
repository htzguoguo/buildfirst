/**
 * Created by Administrator on 2017/3/30.
 */

var Backbone = require( 'backbone' ),
    Task = require( '../model/task' );

module.exports = Backbone.Collection.extend( {
    model : Task,
    comparator : 'summary'
} );
