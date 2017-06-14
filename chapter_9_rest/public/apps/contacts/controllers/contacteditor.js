/**
 * Created by Administrator on 2017/6/6.
 */

var Backbone = require( 'backbone' ),
    ControllerBase = require( '../../../utils/basecontroller' ),
    _ = require( 'underscore' ),
    ContactFormLayout = require( '../views/contactformlayout' ),
    ContactForm = require( '../views/contactform' ),
    ContactPreview = require( '../views/contactpreview' ),
    ContactEditorController;

ContactEditorController = module.exports = function ( options ) {
    this.mainRegion = options.mainRegion;
    _.extend( this, Backbone.Events );

    this.showEditor = function ( contact ) {
        var layout = new ContactFormLayout( { model : contact } ),
            form = new ContactForm( { model : contact } ),
            preview = new ContactPreview( { model : contact } );
        this.mainRegion.show( layout );
        layout.getRegion( 'form' ).show( form );
        layout.getRegion( 'preview' ).show( preview );

        this.listenTo( form, 'form:cancel', this.cancel );
        this.listenTo( form, 'form:save', this.saveContact );
    };
    this.cancel = function () {
        this.askConfirmation( 'Changes will be lost', true, function ( isConfirm ) {
            if ( isConfirm ) {
                window.app.router.navigate( '/contacts', true );
            }
        } );
    };
    this.saveContact = function ( contact ) {
        var app = this;
        contact.save( null , {
            success : function () {
                    app.successMessage( 'contact was saved' );
                    window.app.router.navigate( '/contacts', true );
                    },
            error : function () {
                   app.errorMessage( 'something goes wrong' );
            }});
    };
};

_.extend( ContactEditorController.prototype, ControllerBase );

