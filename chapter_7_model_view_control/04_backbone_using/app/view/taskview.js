/**
 * Created by Administrator on 2017/3/30.
 */

var _ = require( 'underscore' ),
    Backbone = require( 'backbone' ),
    Task = require( '../model/task' );


module.exports = Backbone.View.extend( {
    tagName : 'tr',
    template : _.template('<td><%= id %></td><td class="summary"><%= summary %></td><td><%= description %></td>'),
    model : new Task( { id : 1, summary : 15, description : 'test' } ),
    initialize : function () {
        "use strict";
        this.el.innerHTML =  this.template( this.model.toJSON() ) ;
        return this;
    },
    events : {
        'click .summary' : 'summary'
    },
    summary : function () {
        "use strict";
        console.log( 'summary' );
    }
} );