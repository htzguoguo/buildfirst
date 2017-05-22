/**
 * Created by Administrator on 2017/5/21.
 */

var ModelView = require( '../../../utils/modelview' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contact.html', 'utf8' ),
    ContactView;

ContactView = module.exports = ModelView.extend( {
    template : template,
    updateView : function ( key ) {
        "use strict";
        user.fetch( {
            success : function ( model, response ) {
                console.log(response  );
                app.viewModel = response;
                app.render();
                container.html( app.el );
            },
            error : function () {
                window.app.router.navigate('login', {trigger: true});
            }
        } );
    }
} );


