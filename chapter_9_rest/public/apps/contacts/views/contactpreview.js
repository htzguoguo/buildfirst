/**
 * Created by Administrator on 2017/6/6.
 */

var ModelView = require( '../../../utils/modelview' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/contactpreview.html', 'utf8' ),
    ContactPreview;

ContactPreview = module.exports = ModelView.extend( {
    template : template,
    initialize : function () {
        this.model.on( 'change', this.render, this );
        ModelView.prototype.initialize.call( this );
    }
} );

