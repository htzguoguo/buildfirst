/**
 * Created by Administrator on 2017/6/6.
 */

var ModelView = require( '../../../utils/modelview' ),
    _ = require( 'underscore' ),
    fs = require( 'fs' ),
    StickIt = require( 'backbone.stickit' ),
    template = fs.readFileSync( __dirname + '/templates/contactpreview.html', 'utf8' ),
    ContactPreview;

ContactPreview = module.exports = ModelView.extend( {
    template : template,
   /* initialize : function () {
        this.model.on( 'change', this.handleChange, this );
        ModelView.prototype.initialize.call( this );
    },
    handleChange : function ( event ) {
        console.log( 'event', event );
        var changedKeys = _.keys( event.changed ),
            $target;
        console.log( 'changedKeys', changedKeys  );
        changedKeys.forEach( function ( key ) {
            $target = this.$( '#' + key );
            if ( $target ) {
                $target.html( event.changed[ key ] );
            }
        } );
    },*/
   onShow : function () {
       this.stickit();
   },
    bindings : {
        '#firstname' : 'firstname',
        '#othercontactnumbers' : 'othercontactnumbers',
        '#primaryemailaddress' : 'primaryemailaddress'
    }
} );

