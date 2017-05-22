/**
 * Created by Administrator on 2016/12/27.
 */

var $ = require( 'jquery' );

$.ajaxSetup(
    {
        contentType: 'application/json',
        dataType: 'json'
    }
);

function postJson( url, data, success ) {
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        success: success
    });
}

function getJson( url, success ) {
    $.ajax({
        type: "GET",
        url: url,
        success: success
    });
}

module.exports = {
    postJson : postJson,
    getJson : getJson
};


