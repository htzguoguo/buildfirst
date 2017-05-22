/**
 * Created by Administrator on 2017/3/31.
 */

var Base = require( './base' );

module.exports = Base.extend( {
    url : '/users/:login',
    idAttribute : 'login'
} );

module.exports.id = 'User';