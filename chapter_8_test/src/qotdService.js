/**
 * Created by Administrator on 2017/4/6.
 */

var request = require( 'superagent' );

module.exports = function ( done ) {
    "use strict";
    request.get( 'https://api.github.com/zen' ).end( cb );

    function cb( err, result ) {
        done( err, result.text );
    }
};
