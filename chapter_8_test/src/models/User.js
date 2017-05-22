/**
 * Created by Administrator on 2017/4/6.
 */

var users = {
    111 : {
        id : 111,
        name : 'john',
        email : 'john@163.com'
    }
};

module.exports = {
    findOne : function ( query, done ) {
        "use strict";
        setTimeout( done( null, users[ query.id ] ), 2000 );
    }
};
