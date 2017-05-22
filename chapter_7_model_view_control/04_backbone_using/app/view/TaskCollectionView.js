/**
 * Created by Administrator on 2017/3/30.
 */

var Backbone = require( 'backbone' ),
    TaskView = require( './taskview' );

module.exports = Backbone.View.extend( {
    initialize : function () {
        "use strict";
        this.listenTo( this.collection, 'add', this.addOne );
        this.listenTo( this.collection, 'reset', this.render );
    },
    addOne : function ( task ) {
        "use strict";
        var view = new TaskView( { model : task } );
        this.$el.append( view.render().$el );
    },
    render : function () {
        "use strict";
        console.log( "render" );
        var _this = this;
        this.$el.empty();
        this.collection.each( function ( task ) {
            _this.addOne( task );
        } );
        return this;
    }
} );
