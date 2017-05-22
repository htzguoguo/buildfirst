/**
 * Created by Administrator on 2017/4/18.
 */
var Backbone = require( 'backbone' ),
    _ = require( 'underscore' );

module.exports = Backbone.Model.extend( {
    defaults : {
        accessToken : null,
        userName : null
    },
    initialize : function () {
        "use strict";
        this.load();
    },
    authenticated : function () {
        "use strict";
        return ! _.isEmpty( $.cookie( 'accessToken' ) );
    },
    load : function () {
        "use strict";
        this.userName = $.cookie( 'name' );
        this.accessToken = $.cookie( 'accessToken' );
    },
    save : function ( authHash ) {
        "use strict";
        $.cookie( 'name', authHash.name );
        $.cookie( 'accessToken', authHash.accessToken );
    },
    destory : function () {
        "use strict";
        $.cookie( 'name', '' );
        $.cookie( 'accessToken', '' );
    }
} );
