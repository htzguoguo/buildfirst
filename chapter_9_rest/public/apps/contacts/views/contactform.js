/**
 * Created by Administrator on 2017/6/6.
 */

var ModelView = require( '../../../utils/modelview' ),
    _ = require( 'underscore' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contactform.html', 'utf8' ),
    ContactForm;

ContactForm = module.exports = ModelView.extend( {
    template : template,
    className : 'form-horizontal',
    events : {
        'click #save' : 'saveContact',
        'click #cancel' : 'cancel'
    },
    serializeData : function () {
        return _.defaults( this.model.toJSON(), {
            title : '',
            company : '',
            othercontactnumbers : '',
            primaryemailaddress : '',
            birthdate : ''
        } );
    },
    getInput : function ( selector ) {
        return this.$el.find( selector ).val();
    },
    saveContact : function ( event ) {
        event.preventDefault();
        this.model.set( 'firstname',  this.getInput( '#name' ));
        this.model.set( 'birthdate', this.getInput( '#birthdate' ) );
        this.model.set( 'title',  this.getInput( '#title' ));
        this.model.set( 'company', this.getInput( '#company' ) );
        this.model.set( 'othercontactnumbers', this.getInput( '#othercontactnumbers' ) );
        this.model.set( 'primaryemailaddress', this.getInput( '#primaryemailaddress' ) );
        this.model.set( 'facebook', this.getInput( '#facebook' ) );
        this.model.set( 'twitter', this.getInput( '#twitter' ) );
        this.model.set( 'google', this.getInput( '#google' ) );
        this.model.set( 'github', this.getInput( '#github' ) );
        this.trigger( 'form:save', this.model );
    },
    cancel : function () {
        this.trigger( 'form:cancel', this.model );
    }
} );