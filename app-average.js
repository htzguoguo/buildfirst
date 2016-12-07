/**
 * Created by Administrator on 2016/12/6.
 */

function Average() {
    this.sum = 0;
    this.count = 0;

};

Average.prototype.add = function ( value ) {
    this.sum += value;
    this.count++;
}

Average.prototype.calc = function () {
    return this.sum / this.count;
};

var m = new Average();
m.add( 15 );
m.add( 9 );

console.log(  m.calc() );

function average( values ) {
    var sum = values.reduce( function ( accumlutor, value ) {
        return accumlutor + value;
    }, 0 );
    return sum / values.length;
};

console.log( average( [ 25, 32, 11 ] ) );

function averageFactory() {
    var sum = 0, count = 0;
    return function ( value ) {
        sum += value;
        count++;
        return sum / count;
    };
};

var cal = averageFactory();
cal(15);
cal(25);
console.log( cal(33) );

