/**
 * Created by Administrator on 2017/3/22.
 */

var Base  = require( './base' ),
    fs = require( 'fs' ),
    template = fs.readFileSync( __dirname +  '/templates/collection.html', 'utf8' ),
    Collection = require( '../collections/sample' );

module.exports = Base.extend( {
    template : template,
    el : '.view',
    initialize : function () {
        "use strict";
        this.collection = new Collection();

        this.collection.add( { name : 'a' } );
        this.collection.add( { name : 'b' } );
        this.collection.add( { name : 'c' } );

        this.collection.on( 'add', this.report, this );
        this.viewModel = {
            title : 'name',
            people : this.collection.toJSON()
        };
        this.render();
    },
    report : function ( model ) {
        "use strict";
        this.viewModel = {
            title : 'name',
            people : this.collection.toJSON()
        };
        this.render();

    },
    addBook : function ( e ) {
        "use strict";
        var name = e.target.value;
        this.collection.add( { name : name } );

    },
    events : {
        'change.input' : 'addBook'
    }
} );

