/**
 * Created by Administrator on 2017/3/31.
 */

module.exports = {
    index : function ( params, callback ) {
        "use strict";
        var spec = {
            collection : {
                collection : 'Users',
                params : params
            }
        };
        this.app.fetch( spec, function ( err, result ) {
            callback( err, result );
        } );
    },
    show : function ( params, callback ) {
        "use strict";
        var spec = {
            model : {
                model : 'User',
                params : params
            },
            repos : {
                collection : 'Repos',
                params : {
                    user : params.login
                }
            }
        };
        this.app.fetch( spec, function ( err, result ) {
            callback( err, result );
        } );
    }
};
