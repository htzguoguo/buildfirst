/**
 * Created by Administrator on 2017/3/28.
 */

var fs = require('fs'),
    Base = require( './base' ),
    Product = require( '../models/product' ),
    productsService = require( '../services/productsServices' ),
    template = fs.readFileSync( __dirname + '/templates/addItem.html', 'utf8' );

module.exports = Base.extend( {
   /* el : '.view',*/
    template : template,
    initialize : function () {
        "use strict";
        this.collection = productsService.collection;
        this.updateView();
    },
    updateView : function ( vm ) {
        "use strict";
        this.viewModel = vm || {};
        this.render();
    },
    events : {
        'click .add' : 'addItem'
    },
    addItem : function () {
        "use strict";
        var name = this.$( '.name' ).val(),
            quantity = parseInt( this.$( '.quantity' ).val(), 10 ),
            model = this.collection.findWhere( { name : name } );
        console.log( name, quantity );
        if ( model ) {
            model.addToOrder( quantity );
        }else {
            model = new Product( { name : name, quantity : quantity }, { validate : true } );
            if ( ! model.validationError  ) {
                this.collection.add( model );
            }
        }
        if ( ! model.validationError  ) {
            location.href = '#items';
            return;
        }
        this.updateView( {
            name : name,
            quantity : quantity,
            error : model.validationError
        } );
    }
} );
