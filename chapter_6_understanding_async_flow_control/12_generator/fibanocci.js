/**
 * Created by Administrator on 2017/1/8.
 */

function* fib(){
    var old = 1, older = 0;
    yield 1;
    while( true ) {
        yield old + older;
        var next = old + older;
        older = old;
        old = next;
    }
}

var iterator = fib();
var i = 10;
var item;
while( i-- ) {
    item = iterator.next();
    console.log( item );

}

function* keywords() {
    "use strict";
    yield 'javascript';
    console.log( 'there has suspended.' );
    yield 'buildfirst';
    yield 'design';
    yield 'architect';
}

var it = keywords();

console.log(it.next());

setTimeout( function () {
    "use strict";
    console.log(it.next());
}, 2000 );
/*for ( keyword of keywords() ) {
    console.log( keyword );
}*/
