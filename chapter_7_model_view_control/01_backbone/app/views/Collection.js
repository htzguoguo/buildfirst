/**
 * Created by Administrator on 2017/1/25.
 */

var fs = require( 'fs' ),
    BaseSample = require( './base' ),
    template = fs.readFileSync( __dirname + '/templates/collection.html',{ 'encoding' : 'utf8' } ),
    Collection = require( '../collections/sample' );

module.exports = BaseSample.extend( {
    el : '.view',
    template : template,
    initialize : function () {
        "use strict";
        var collection = new Collection();
        collection.add( { name : 'jake' } );
        collection.add( { name : 'tom' } );
        this.viewModel = {
            title : 'Names',
            people : collection.toJSON()
        };
        this.render();
    }
} );
