/**
 * Created by Administrator on 2017/4/6.
 */

module.exports = function ( thing ) {
    "use strict";
    var events = {};
    if ( ! thing ) {
        thing = {};
    }
    thing.on = function ( type, listener ) {
        if ( events[ type ] ) {
            events[ type ].push( listener );
        }else {
            events[ type ] = [ listener ];
        }
    };
    thing.emit = function ( type ) {
        var evt, len, i, args;
        if ( events[ type ] ) {
            evt = events[ type ];
            args = Array.prototype.slice.call( arguments, 1 );
            len = evt.length;
            for ( i = 0; i < len; i++ ) {
                evt[ i ].apply( thing, args );
            }
        }
    };
    return thing;
};
