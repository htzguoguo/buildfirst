/**
 * Created by Administrator on 2017/6/14.
 */

var ModelView = require( '../../../utils/modelview' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contactformemailitem.html', 'utf8' ),
    EmailListItem;

EmailListItem = module.exports = ModelView.extend( {
    template : template,
    className : 'form-group',
    events : {
        'change .description' : 'updateDescription',
        'change .email' : 'updateEmail',
        'click a' : 'deleteEmail'
    },
    updateDescription : function () {
        var $description = this.$( '.description' );
        this.model.set( 'description', $description.val() );
    },
    updateEmail : function () {
        var $email = this.$( '.email' );
        this.model.set( 'email', $email.val() );
    },
    deleteEmail : function ( event ) {
        event.preventDefault();
        this.trigger( 'email:deleted', this.model );
    }
} );