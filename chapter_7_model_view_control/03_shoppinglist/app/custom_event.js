/**
 * Created by Administrator on 2017/3/30.
 */
var _ = require( 'underscore' ),
    Backbone = require( 'backbone' );

var model = _.extend( {} , Backbone.Events );
var view = _.extend( {}, Backbone.Events );
view.listenTo( model, 'custom_event', function () {
    alert( 'catch the event' );
} );
model.trigger( 'custom_event' );
alert( 'done' );