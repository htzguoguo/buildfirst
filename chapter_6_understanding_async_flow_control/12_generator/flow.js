/**
 * Created by Administrator on 2017/1/8.
 */

module.exports = flow;

function flow( generator ) {
    "use strict";
    var iterator = generator( next );
    next();
    function next( err, result ) {
        if ( err ) {
            iterator.throw( err );
        }
        var item = iterator.next( result );
        if ( item.done ) {
            return;
        }
        if ( typeof item.value === 'function') {
            item.value( next );
        }
    }
}

