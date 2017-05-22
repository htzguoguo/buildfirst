/**
 * Created by Administrator on 2017/4/6.
 */

var test = require( 'tape' ),
    bar = require( '../src/event-bar' );

function testCase( name, cb ) {
    "use strict";
    var t = test( name, cb );
    t.once( 'prerun', setup );
    t.once( 'end', teardown );
}

function setup() {
    "use strict";
    function add( type, className ) {
        var t = document.createElement( type );
        t.className = className;
        document.body.appendChild( t );
    }
    add( 'input', 'square' );
    add( 'div', 'barman' );
    add( 'div', 'clear' );
    add( 'div', 'result' );
    bar();
}

function teardown() {
    "use strict";
    var selectors = [ '.square', '.barman', '.clear', '.result' ];
    selectors.forEach( function ( selector ) {
        var ele = document.querySelector( selector );
        ele.parentNode.removeChild( ele );
    } );
}

testCase( 'barman without input should show an error', function ( t ) {
    "use strict";
    var barman = document.querySelector( '.barman' ),
        result;
    barman.click();

    result = document.querySelectorAll( '.result p' );
    t.plan(4);
    t.ok( barman );
    t.equal( result.length , 1 );
    t.equal( result[ 0 ].className , 'error' );
    t.equal( result[ 0 ].innerText, 'ddfff' );
}  );

testCase( 'barman with an int should show an error', function ( t ) {
    "use strict";
    var square = document.querySelector( '.square' ),
        barman = document.querySelector( '.barman' ),
        result;
    square.value = 2;
    barman.click();
    result = document.querySelectorAll( '.result p' );
    t.plan(4);
    t.ok( barman );
    t.equal( result.length, 1 );
    t.equal( result[ 0 ].className, 'error' );
    t.equal( result[ 0 ].innerText, 'you are such a unit, Interges can not be rounded' );
} );

testCase( 'numbers should be rounded', function ( t ) {
    "use strict";
    var square = document.querySelector( '.square' ),
        barman = document.querySelector( '.barman' ),
        result;
    square.value = 2.4;
    barman.click();
    result = document.querySelectorAll( '.result p' );
    t.plan(4);
    t.ok( barman );
    t.equal( result.length, 1 );
    t.equal( result[ 0 ].className, 'rounded' );
    t.equal( result[ 0 ].innerText, 'Rounded To ' + Math.round(2.4) + ' .Another round?' );
} );

testCase( 'two inputs should produce two results', function ( t ) {
    "use strict";
    var square = document.querySelector( '.square' ),
        barman = document.querySelector( '.barman' ),
        value = 2.4,
        result;
    square.value = value;
    barman.click();
    square.value = 3;
    barman.click();
    result = document.querySelectorAll( '.result p' );

    t.plan(4);
    t.ok( barman );
    t.equal( result.length, 2 );
    t.equal( result[0].className, 'rounded' );
    t.equal( result[1].className, 'error' );
} );

testCase( 'clearing empty list does not throw', function ( t ) {
    "use strict";
    var clear = document.querySelector( '.clear' );
    t.plan(2);
    t.ok( clear );
    t.doesNotThrow( function () {
        clear.click();
    } );
} );

testCase( 'clicking clear removes any results from the list', function ( t ) {
    "use strict";
    var barman = document.querySelector( '.barman' ),
        square = document.querySelector( '.square' ),
        clear = document.querySelector( '.clear' ),
        results, clearResults;
    square.value = 3.4;
    barman.click();
    square.value = 3;
    barman.click();
    square.value = '';
    barman.click();
    results = document.querySelectorAll( '.result p' );
    clear.click();
    clearResults = document.querySelectorAll( '.result p' );
    t.plan(2);
    t.equal( results.length, 3 );
    t.equal( clearResults.length, 0 );
} );


