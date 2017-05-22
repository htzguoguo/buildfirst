/**
 * Created by Administrator on 2017/3/22.
 */
"use strict";
var Backbone = require( 'backbone' ),
    Base = require( './base' ),
    Product = require( '../models/product' ),
    Products = require( '../collection/products' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/shoppinglist.html', 'utf8' );

module.exports = Base.extend( {
    el : '.view',
    template : template,
    products : new Products( [
        { name : 'apple', quantity : 1 },
        { name : 'orange', quantity : 10 },
        { name : 'berry', quantity : 22}
    ] ),
    initialize : function () {
        this.products.on( 'add', this.updateView, this );
        this.products.on( 'change', this.updateView, this );
        this.products.on( 'remove', this.updateView, this );
        this.updateView();
    },
    events : {
        'click .remove' : 'removeitem',
        'click .add' : 'addItem',
        'click .edit' : 'editItem',
        'click .cancel' : 'cancelEdit',
        'click .save' : 'saveEdit'
    },
    updateView : function () {
        this.viewModel = {
            shopping_list : this.products.toJSON()
        };
        this.render();
    },
    updateViewWithValidation : function ( validation ) {
        this.viewModel = {
            shopping_list : this.products.toJSON(),
            error : validation.error,
            name : validation.name,
            quantity : validation.quantity
        };
        this.render();
    },
    saveEdit : function ( e ) {
        var name = e.target.dataset.name,
            product = this.products.findWhere( { name : name } ),
            quantity = parseInt( this.$( '.edit-quantity' ).val(), 10 );
        product.set( 'quantity', quantity, { validate : true } );

        if ( ! product.validationError ) {
            product.set( 'editing', false );

        }else {
            product.set( 'error', product.validationError );
        }
        this.updateView();
    },
    cancelEdit : function ( e ) {
        var name = e.target.dataset.name,
            product = this.products.findWhere( { name : name } );
        product.set( 'editing',  false );
        this.updateView();
    },
    editItem : function ( e ) {
        var name = e.target.dataset.name,
            product = this.products.findWhere( { name : name } );
        product.set( 'editing' , true );
        this.updateView();
    },
    addItem : function ( e ) {
        var name = this.$( '.name' ).val(),
            quantity = parseInt( this.$( '.quantity' ).val(), 10 ),
            model = this.products.findWhere( { name : name } );
        if ( model ) {
            model.addToOrder( quantity );
        }else {
            model = new Product( { name : name, quantity : quantity }, { validate : true } );
            if ( ! model.validationError ) {
                this.products.add( model );
            }
        }
        if ( ! model.validationError ) {
            return;
        }
        this.updateViewWithValidation( {
            name : name,
            quantity : quantity,
            error : model.validationError
        } );
    },
    removeitem : function ( e ) {
        var name = e.target.dataset.name,
            model = this.products.findWhere( { name : name } );
        this.products.remove( model );
    }
} );
