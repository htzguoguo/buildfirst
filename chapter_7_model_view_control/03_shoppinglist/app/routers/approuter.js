/**
 * Created by Administrator on 2017/3/22.
 */
var Backbone = require( 'backbone' ),
    Listview = require( '../views/listView' ),
    AddItemView = require( '../views/addItem' ),
    $ = require( 'jquery' );

module.exports = Backbone.Router.extend( {
    routes : {
        '' : 'root',
        'items' : 'listItems',
        'items/add' : 'addItem'
    },
    root : function () {
        "use strict";
        this.navigate( 'items', { trigger : true } );
    },
    listItems : function () {
        "use strict";
        new Listview();
    },
    addItem : function () {
        "use strict";
        if ( this.addView ) {
           /* this.addView.unbind();*/
            this.addView.undelegateEvents();
            this.addView.remove();
        }
        var view = new AddItemView();
        view.render();
        $( '.view' ).html( view.el );
        this.addView = view;
    }
} );
