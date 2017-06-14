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
    onShow : function () {
       this.stickit();
   },
    bindings : {
        '#name' : 'name',
        '#phone' : 'phone',
        '#email' : 'email'
    }
} );

