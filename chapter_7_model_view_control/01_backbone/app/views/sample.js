/**
 * Created by Administrator on 2017/1/10.
 */

var fs = require( 'fs' ),
    base = require( './base' ),
    template = fs.readFileSync( __dirname + '/templates/sample1.mu', { 'encoding' : 'utf8' } ),
    SampleModel = require( '../models/sample' )
    ;

module.exports = base.extend( {
    el : '.view',
    template : template,
    initialize : function () {
        "use strict";
        this.model = new SampleModel();
        this.model.on( 'change', this.updateView, this );
        this.model.set( 'raw', 'https://ponyfoo.com/bf' );
    },
    updateView : function () {
        "use strict";
        this.viewModel = {
            raw : this.model.get( 'raw' ),
            binary : this.model.getBinary(),
            isLink : this.model.isLink()
        };
        this.render();
    },
    events : {
        'change.input': 'inputChanged'
    },
    inputChanged : function (e) {
        "use strict";
        this.model.set( 'raw', e.target.value );
    }
} );