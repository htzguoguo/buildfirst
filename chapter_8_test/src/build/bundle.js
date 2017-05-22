(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * Created by Administrator on 2017/4/6.
 */

module.exports = function () {
    "use strict";
    var barman = document.querySelector( '.barman' ),
        square = document.querySelector( '.square' ),
        clear = document.querySelector( '.clear' ),
        result = document.querySelector( '.result' );

    function rounding( number, done ) {
        if ( isNaN( number ) ) {
            done( new Error( 'do you ever know what a number is?' ) );
        }else if ( number === Math.round( number )  ) {
            done( new Error( 'you are such a unit, Interges can not be rounded' ) );
        }else {
            done( null, Math.round( number ) );
        }
    }

    function report( err, value ) {
        var p = document.createElement( 'p' );
        if ( err ) {
            p.className = 'error';
            p.innerText = err.message;
        }else {
            p.className = 'rounded';
            p.innerText = 'Rounded To ' + value + ' .Another round?'
        }
        result.appendChild( p );
    }

    barman.addEventListener( 'click', rounded );

    function rounded() {
        var number = parseFloat( square.value );
        rounding( number, report );
    }

    clear.addEventListener( 'click', reset );

    function reset() {
        var all = document.querySelectorAll( '.result p' ),
            len = all.length;
        while( len-- ) {
            result.removeChild( all[ len ] );
        }
    }

};

},{}],2:[function(require,module,exports){
/**
 * Created by Administrator on 2017/4/6.
 */

var event = require( './event-bar' );
event();

},{"./event-bar":1}]},{},[2]);
