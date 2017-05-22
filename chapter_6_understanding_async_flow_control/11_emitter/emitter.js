/**
 * Created by Administrator on 2017/1/2.
 */

function emitter ( thing ) {
    var events = {};
    if ( !thing ) {
        thing = {};
    }
    thing.on = function ( type, listener ) {
        if ( ! events[ type ] ) {
            events[ type ] = [];
        }
        events[ type ].push( listener );
    };
    thing.emit = function ( type ) {
        var evt = events[ type ];
        if ( ! evt ) {
            return;
        }
        var args = Array.prototype.slice.call( arguments, 1 );
        for ( var i = 0; i < evt.length; i++ ) {
             debounce( evt[ i ] );
        }
        function debounce( e ) {
            setTimeout( function () {
                e.apply( thing, args );
            }, 0 );
        }
    };

    return thing;
}

module.exports = emitter;
