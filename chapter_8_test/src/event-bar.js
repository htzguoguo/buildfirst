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
