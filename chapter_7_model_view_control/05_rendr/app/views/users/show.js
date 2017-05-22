/**
 * Created by Administrator on 2017/3/31.
 */

var BaseView = require( '../base' );

module.exports = BaseView.extend( {
    getTemplateData : function () {
        "use strict";
        var data = BaseView.prototype.getTemplateData.call( this );
        data.repos = this.options.repos;
        return data;
    }
} );

module.exports.id = 'users/show';
