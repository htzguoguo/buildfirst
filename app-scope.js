/**
 * Created by Administrator on 2016/12/6.
 */

function getcounter() {
    var counter = 0;
    return function () {
        return counter++;
    }
}

var c = getcounter();

console.log( c() );
console.log( c() );

function scoping() {
    console.log( this );
    return function () {
        console.log( this );
    }
}

console.log( scoping()() );