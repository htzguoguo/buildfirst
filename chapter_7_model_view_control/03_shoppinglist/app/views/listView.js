/**
 * Created by Administrator on 2017/3/28.
 */

var fs = require( 'fs' ),
    Base = require( './base' ),
    ItemView = require( './listItem' ),
    productsService = require( '../services/productsServices' ),
    template = fs.readFileSync( __dirname + '/templates/list.html', 'utf8' );
    

module.exports = Base.extend( {
    el : '.view',
    template : template,
    products : productsService.collection,
    initialize : function () {
        "use strict";
        this.partials = {};
        this.render();
        this.$list = this.$( '.items' );
        this.products.on( 'add', this.addItem, this  );
        this.products.on( 'remove', this.removeItem, this );
        this.products.models.forEach( this.addItem, this );
    },
    removeItem : function ( product ) {
        "use strict";
        var itemView = this.partials[ product.cid ];
        itemView.el.remove();
        delete this.partials[ product.cid ];

    },
    addItem : function ( product ) {
        "use strict";
        var item = new ItemView( {
            model : product,
            collection : this.products
        } );
        this.$list.append( item.el );
        this.partials[ product.cid ] = item;
    }
} );
