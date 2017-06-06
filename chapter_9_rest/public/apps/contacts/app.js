/**
 * Created by Administrator on 2017/5/16.
 */

var ContactView = require( './controllers/contactview' ),
    ContactList = require( './controllers/contactlist' ),
    ContactModel = require( './models/contact' ),
    ContactCollection = require( './collections/contacts' ),
    AppBase = require( '../../utils/baseapp' ),
    _ = require( 'underscore' ),
    App, C;

App = function ( options ) {
    "use strict";
    this.currentController = null;
    this.mainRegion = options.mainRegion;
    this.bodyRegion = options.bodyRegion;
    this.GetName = function () {
        "use strict";
        return 'ContactApp';
    };
    this.showContactById = function ( id ) {
        "use strict";
        var contact = new ContactModel( {
                id :   id,
                primarycontactnumber : id
            } ),
            app = this;
        contact.fetch( {
            success : function ( contact ) {
                app.ShowViewer( contact );
            },
            error : function () {
                // window.app.router.navigate('login', {trigger: true});
            }
        } );
    };
    this.ShowContactList = function () {
        "use strict";
        var contracts = new ContactCollection(),
            app = this;
        contracts.fetch(
            {
                success : function ( collection ) {
                    var contactList = app.startController(ContactList);
                    contactList.showList(collection);
                },
                error : function () {

                }
            }
        );
    };
    this.ShowViewer = function ( contact ) {
        var contactViewer =  this.startController(ContactView);
        contactViewer.showContact( contact );
    };


};

_.extend( App.prototype, AppBase );

module.exports = App;






