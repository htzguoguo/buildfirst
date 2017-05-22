/**
 * Created by Administrator on 2017/3/31.
 */

var Base = require( './base' );

module.exports = Base.extend( {
    url : '/repos/:owner/:name',
    idAttribute : 'name'
} );
module.exports.id = 'Repo';
