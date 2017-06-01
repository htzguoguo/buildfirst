/**
 * Created by Administrator on 2017/5/24.
 */

var Backbone = require( 'backbone' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/shell.html', 'utf8' ),
    ShellView;

ShellView = module.exports = Backbone.View.extend( {
     template : template
} );

