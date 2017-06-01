/**
 * Created by Administrator on 2017/4/14.
 */

var Backbone = require( 'backbone' );

module.exports = Backbone.Model.extend( {
    url : 'auth',
    name : '',
    pw : '',
    login : function ( callback ) {
        "use strict";
        this.save( {}, {
            success : function ( model, response ) {
                console.log( 'model', model );
                console.log( 'success', response );
                if ( model.get('status') === 'online' ) {
                    callback( model.toJSON() );
                }
            },
            error : function ( model, response ) {
                console.log( 'model', model );
                callback( response.responseJSON  );
            }
        }  );
    },
    logout : function ( callback ) {
        "use strict";
         console.log( 'logout' );
         this.destroy( {
             success : function ( model, response ) {

             },
             error : function ( model, response ) {

             }
         } );
    }
} );

