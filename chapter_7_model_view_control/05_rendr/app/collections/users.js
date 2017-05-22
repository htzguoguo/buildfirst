/**
 * Created by Administrator on 2017/3/31.
 */

var User = require( '../models/user' ),
    Base = require( './base' );

module.exports = Base.extend( {
    model : User,
    url : '/users'
} );

module.exports.id = 'Users';
