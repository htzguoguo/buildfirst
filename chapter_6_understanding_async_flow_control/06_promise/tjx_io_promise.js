/**
 * Created by Administrator on 2016/12/29.
 */
'use strict';

var Promise = require( 'es6-promise' ).Promise;

var sendJson = function ( url, data ) {
    var pro = new Promise( function ( fulfill, reject ) {
        sendRequest( 'POST', url, data, fulfill, reject );
    } );
    return pro;
};

var sendRequest = function( method, url, data, fulfill, reject ) {
    var xhr = new XMLHttpRequest(),
        dd = null;
    xhr.open( method, url, true );
    if ( method === 'POST' ) {
        xhr.setRequestHeader('content-type', 'application/json');
    }
    xhr.onload = function () {
        if ( xhr.status >= 200 && xhr.status < 300 ) {
            if(xhr.getResponseHeader('content-type')==='application/json'){
                fulfill(JSON.parse(xhr.response));
            } else {
                fulfill( xhr.response );
            }
        }else {
            reject( new Error( xhr.responseText ) );
        }
    };
    xhr.onerror = function () {
        reject( new Error( 'Network Error.' ) );
    };
    if ( data ) {
        dd = JSON.stringify( data );
    }
    xhr.send( dd );
};

var getJson = function ( url ) {
    var pro = new Promise( function ( fulfill, reject ) {
        sendRequest( 'GET', url, null, fulfill, reject );
    } );
    return pro;
};

module.exports = {
    getJson : getJson,
    sendJson : sendJson
};


