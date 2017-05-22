/**
 * Created by Administrator on 2017/4/7.
 */

var test = require( 'tape' ),
    ShoppingItem = require( '../app/models/shoppingItem' ),
    cases = [
        [ 'must be constructed with a name', {} ],
        [ 'must be constructed with a quantity', { name : 'cocacola' } ],
        [ 'cannot have NaN quantity', { name : 'cocacola', quantity : NaN } ],
        [ 'cannot have negative quantity', { name : 'cocacola', quantity : -5 } ],
        [ 'cannot have zero quantity' , { name : 'cocacola', quantity : 0 }],
        ['is valid when both a name and a positive quantity are provided', {
            name: 'Chocolate', quantity: 1
        }, true]
    ];

function testCase( c ) {
    "use strict";
    test( 'ShoppingItem ' + c[0], function ( t ) {
        var expection = !c[ 2 ],
            expectionText = ' is ' + ( expection ? 'invalid' : 'valid' ),
            item = new ShoppingItem( c[1], { validate : true } );

        t[expection]( item.validationError, JSON.stringify( c[1] ) + expectionText );
        t.end();
    } );
}

cases.forEach( testCase );

test( 'consumer can increase quantity of a shoppingitem', function ( t ) {
    "use strict";
    var item = new ShoppingItem( { name : 'cocacola', quantity : 1 },
        { validate : true } );
    item.addToOrder(4);
    t.equal( item.ValidationError, null );
    t.equal( item.get( 'quantity' ), 5 , 'four items got added to the order' );
    t.end();
    
} );