/**
 * Created by Administrator on 2017/3/22.
 */

var Base = require( './base' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname + '/templates/model.html', 'utf8' ),
    SampleModel = require( '../models/sample' );
module.exports = Base.extend( {
    el : '.view',
    template : template,
    initialize : function () {
        "use strict";
        this.model = new SampleModel();
        this.model.on( 'change', this.updateView, this );
        this.model.set( 'raw', 'http://www.baidu.com' );
    },
    updateView : function () {
        "use strict";
        this.viewModel = {
            raw : this.model.get( 'raw' ),
            isLink : this.model.isLink(),
            binary : this.model.getBinary()
        };
        this.render();
    },
    events : {
        'change.input' : 'inputChanged'
    },
    inputChanged : function ( e ) {
        "use strict";
        this.model.set( 'raw', e.target.value );
    }
} );
