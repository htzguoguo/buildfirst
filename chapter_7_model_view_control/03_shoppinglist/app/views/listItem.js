/**
 * Created by Administrator on 2017/3/28.
 */

var fs = require( 'fs' ),
    Base = require( './base' ),
    template = fs.readFileSync( __dirname + '/templates/listItem.html', 'utf8' );

module.exports = Base.extend( {
    tagName : 'li',
    template : template,
    initialize : function () {
        "use strict";
        this.model.on( 'change', this.updateView, this );
        this.updateView();
    },
    updateView : function () {
        "use strict";
        this.viewModel = this.model.toJSON();
        this.viewModel.error = this.model.validationError;
        this.render();
    },
    events : {
        'click .remove' : 'removeItem',
        'click .edit' : 'editItem',
        'click .cancel' : 'cancelEdit',
        'click .save' : 'saveItem'
    },
    saveItem : function () {
        "use strict";
        var quantity = parseInt( this.$( '.edit-quantity' ).val(), 10 );
        this.model.set( 'quantity', quantity, { validate : true } );
        this.model.set( 'editing', this.model.validationError );
    },
    editItem : function () {
        "use strict";
        this.model.validationError = null;
        this.model.set( 'editing', true );
    },
    cancelEdit : function () {
        "use strict";
        this.model.set( 'editing', false );
    },
    removeItem : function (  ) {
        "use strict";
        this.model.validationError = null;
        this.collection.remove( this.model );
    }

} );
