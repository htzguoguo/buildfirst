/**
 * Created by Administrator on 2017/3/21.
 */
var Backbone = require( 'backbone' ),
    Mustache = require( 'mustache' );

module.exports = Backbone.View.extend( {
    render : function () {
        "use strict";
        this.el.innerHTML = Mustache.to_html( this.template, this.viewModel );
    }
} );
