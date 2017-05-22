/**
 * Created by Administrator on 2017/3/21.
 */

var fs = require( 'fs' ),
    Base = require( './base' ),
    template = '';
template = fs.readFileSync( __dirname +  '/templates/sample.mu', 'utf8' );

module.exports = Base.extend( {
    el : '.view',
    template : template
} );
