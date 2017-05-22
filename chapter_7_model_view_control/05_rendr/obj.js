/**
 * Created by Administrator on 2017/3/30.
 */

var Tree = function ( name, age ) {
    "use strict";
    this.name = name;
    this.age = age;
    this.x = 0;
    this.y = 0;
};
Tree.prototype.move = function ( x, y ) {
    "use strict";
    this.x = x;
    this.y = y;
    console.log( this.x, this.y  );
};


var SmallTree = function ( name, age ) {
    "use strict";
    Tree.call( this, name, age );
};
SmallTree.prototype.move = function ( x, y ) {
    "use strict";
    console.log( 'small tree move' );
};

var extend = function ( base, sub ) {
    "use strict";
    var original = sub.prototype;
    sub.prototype = Object.create( base.prototype );
    for ( var key in original ) {
        sub.prototype[ key ] = original[ key ];
    }
    sub.prototype.constructor = sub;
};

extend( Tree, SmallTree );


var ttt = new SmallTree( 'csdd', 2);
console.log( ttt.name );
ttt.move( 2, 3 );

console.log( ttt instanceof SmallTree);
console.log( ttt instanceof Tree);
console.log( ttt.constructor );
