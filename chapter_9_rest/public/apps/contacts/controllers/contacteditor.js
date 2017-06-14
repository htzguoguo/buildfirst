/**
 * Created by Administrator on 2017/6/6.
 */

var Backbone = require( 'backbone' ),
    ControllerBase = require( '../../../utils/basecontroller' ),
    _ = require( 'underscore' ),
    PhonesCollection = require( '../collections/phones' ),
    EmailsCollection = require( '../collections/emails' ),
    ContactFormLayout = require( '../views/contactformlayout' ),
    ContactForm = require( '../views/contactform' ),
    ContactPreview = require( '../views/contactpreview' ),
    PhonesView = require( '../views/phonelist' ),
    EmailsView = require( '../views/emaillist' ),
    ContactEditorController;

ContactEditorController = module.exports = function ( options ) {
    this.mainRegion = options.mainRegion;
    _.extend( this, Backbone.Events );

    this.showEditor = function ( contact ) {
        var phonesData = contact.get( 'phones' ) || [],
            emailsData = contact.get( 'emails' ) || [];
        this.phones = new PhonesCollection( phonesData );
        this.emails = new EmailsCollection( emailsData );

        var layout = new ContactFormLayout( { model : contact } ),
            phonesView = new PhonesView( { collection : this.phones } ),
            emailsView = new EmailsView( { collection : this.emails } ),
            form = new ContactForm( { model : contact } ),
            preview = new ContactPreview( { model : contact } );

        this.mainRegion.show( layout );
        layout.getRegion( 'form' ).show( form );
        layout.getRegion( 'preview' ).show( preview );
        form.getRegion( 'phones' ).show( phonesView );
        form.getRegion( 'emails' ).show( emailsView );

        this.listenTo( form, 'form:cancel', this.cancel );
        this.listenTo( form, 'form:save', this.saveContact );
        this.listenTo( form, 'phone:add', this.addPhone );
        this.listenTo( form, 'email:add', this.addEmail );
        this.listenTo( phonesView, 'item:phone:deleted', function ( view, phone ) {
            this.deletePhone( phone );
        } );
        this.listenTo( emailsView, 'item:email:deleted', function ( view, email ) {
            this.deleteEmail( email );
        } );
    };

    this.deletePhone = function ( phone ) {
        this.phones.remove( phone );
    };

    this.deleteEmail = function ( email ) {
        this.emails.remove( email );
    };

    this.addPhone = function () {
        this.phones.add( {} );
    };

    this.addEmail = function () {
        console.log( 'addEmil' );
        this.emails.add( {} );
    };

    this.cancel = function () {
        this.askConfirmation( 'Changes will be lost', true, function ( isConfirm ) {
            if ( isConfirm ) {
                window.app.router.navigate( '/contacts', true );
            }
        } );
    };
    this.saveContact = function ( contact ) {
        var app = this,
            phonesData = this.phones.toJSON(),
            emailsData = this.emails.toJSON();
        contact.set( {
            phones : phonesData,
            emails : emailsData
        } );
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

