/**
 * Created by Administrator on 2017/3/31.
 */

var Repo = require( '../models/repos' ),
    Base = require( './base' );

module.exports = Base.extend( {
    model : Repo,
    url : '/users/:user/repos'
} );

module.exports.id = 'Repos';
