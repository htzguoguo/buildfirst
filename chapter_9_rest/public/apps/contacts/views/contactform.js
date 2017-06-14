/**
 * Created by Administrator on 2017/6/6.
 */

var Layout = require( '../../../utils/layout' ),
    _ = require( 'underscore' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contactform.html', 'utf8' ),
    ContactForm;

ContactForm = module.exports = Layout.extend( {
    template : template,
    className : 'form-horizontal',
    regions : {
        phones : '.phone-list-container',
        emails : '.email-list-container'
    },
    events : {
        'click #save' : 'saveContact',
        'click #cancel' : 'cancel',
        'keyup input' : 'inputChanged',
        'change input' : 'inputChanged',
        'click #new-phone' : 'addPhone',
        'click #new-email' : 'addEmail'
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
    inputChanged : function ( event ) {
        var $target = $( event.target ),
            value = $target.val(),
            id = $target.attr( 'id' );
        this.model.set( id, value );
    },
    getInput : function ( selector ) {
        return this.$el.find( selector ).val();
    },
    onShow : function () {
        this.$el.find( '#birthdate' ).datepicker();
    },
    saveContact : function ( event ) {
        event.preventDefault();
        this.trigger( 'form:save', this.model );
    },
    cancel : function () {
        this.trigger( 'form:cancel', this.model );
    },
    addPhone : function () {
        this.trigger( 'phone:add' );
    },
    addEmail : function () {
        this.trigger( 'email:add' );
    }
} );