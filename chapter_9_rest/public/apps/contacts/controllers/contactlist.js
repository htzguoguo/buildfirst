/**
 * Created by Administrator on 2017/5/26.
 */

var ContactList,
    Backbone = require( 'backbone' ),
    App = require( '../../../utils/basecontroller' ),
    _ = require( 'underscore' ),
    ContactListLayout = require( '../views/contactlistlayout' ),
    ContactListActionBar = require( '../views/contactlistactionbar' ),
    ContactListView = require( '../views/contactList' );

ContactList = module.exports = function ( options ) {
    "use strict";
    this.mainRegion = options.mainRegion;

    _.extend( this, Backbone.Events );

    this.showList = function ( contacts ) {
        var layout = new ContactListLayout(),
            actionbar = new ContactListActionBar(),
            contactList = new ContactListView({collection: contacts});
        this.mainRegion.show( layout );



        layout.getRegion( 'actions' ).show( actionbar );
        layout.getRegion( 'list' ).show( contactList );
      //  $('.content-wrapper').html( contactList.render().el );

        this.listenTo(  contactList, 'item:contact:delete', this.deleteContact );
    };

    this.deleteContact = function ( view, contact ) {
        this.askConfirmation( 'The contact will be deleted', function ( isConfirm ) {
            if ( isConfirm ) {

                contact.id = contact.get( 'primarycontactnumber' );
                contact.destroy( {
                    success : function () {
                        App.notifySuccess( 'The contact was deleted' );
                    },
                    error : function () {
                        App.notifyError( 'Ooops... Something was wrong' );
                    }
                } );
            }
        } );
    };
};

_.extend( ContactList.prototype, App );
