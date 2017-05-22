/**
 * Created by Administrator on 2017/3/22.
 */

var Backbone = require( 'backbone' ),
    ModelSample = require( '../views/modelsample' ),
    Collection = require( '../views/collection' );

module.exports = Backbone.Router.extend( {
    routes : {
        '' : 'root',
        'items' : 'items',
        'items/:id' : 'getItemById'
    },
    root : function () {
        "use strict";
        this.navigate( 'items', { trigger : true } );
    },
    items : function () {
        "use strict";
        var ms = new ModelSample();
    },
    getItemById : function ( id ) {
        "use strict";
        var col = new Collection();
    }

} );
