/**
 * Created by Administrator on 2017/5/16.
 */

var ContactView = require( './views/contact' ),
    ContactModel = require( './models/contact' ),
    AppBase = require( '../../utils/baseapp' ),
    _ = require( 'underscore' ),
    App;

_.extend( AppBase.prototype, {
    ShowContract : function ( id ) {
        "use strict";
        var contact = new ContactModel( {
            id :   id
        } ),
        app = this;

        console.log( 'id', id );
        contact.fetch( {
            success : function ( data, response ) {
                var contactView = app.startController(ContactView);
                contactView.viewModel = data.toJSON();
                console.log(   data, response );
                $('.content-wrapper').html( contactView.render().el );
            },
            error : function () {
               // window.app.router.navigate('login', {trigger: true});
            }
        } );
    }
} );

module.exports = AppBase;





