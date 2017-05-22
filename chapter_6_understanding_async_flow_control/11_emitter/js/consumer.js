(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Administrator on 2017/1/2.
 */

var emitter = require( './emitter' ),
    thing = new emitter();

thing.on( 'change', function ( a, b, c, d ) {
    console.log( 'thing changed.', a, b, c, d );
} );


thing.emit( 'change', 1, 3, 5, 4 );
thing.emit( 'change', 1 );
},{"./emitter":2}],2:[function(require,module,exports){
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

},{}]},{},[1]);
