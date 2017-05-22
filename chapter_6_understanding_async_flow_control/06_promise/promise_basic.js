/**
 * Created by Administrator on 2016/12/28.
 */

var Promise = require( 'es6-promise' ).Promise;



var pro1 = new Promise( function ( fulfile, reject ) {
         document.writeln( 'pending....' + '<br>' );
         setTimeout( function () {
             var rnd = Math.random();
             if ( rnd > 0.5 ) {
                 fulfile( 'success' );
             }else {
                 reject( new Error( 'Dice roll failed.' ) );
             }
         }, 1000 );
    } );
pro1.then( function success( result ) {
        document.writeln( result.toString() +  ': Successed' + '<br>' );
    }, function fail( reason ) {
        document.writeln( reason.toString() +  ': Rejected'  + '<br>' );
    } );

var pro2 = new Promise( function ( fulfill ) {
    fulfill( '{ "name" : "tom" }' );
} );

pro2.then( function ( result ) {
    return JSON.parse( result );
} ).then( function ( result )  {
    document.writeln(  result.name  + '<br>' );
});






/*for ( var i = 0; i < 50; i++ ) {
    var pro = new Promise( function ( fulfile, reject ) {
        var rnd = Math.random();
        if ( rnd > 0.5 ) {
            fulfile.call( 'Good enough' );
        }else {
            reject.call( new Error( 'Dice roll failed' ) );
        }
    } );

    pro.then( function success( result ) {
        document.writeln( i.toString() +  ': Successed' +  result + '<br>' );
    }, function fail( reason ) {
        document.writeln( i.toString() +  ': Rejected' +  reason + '<br>' );
    } );
}*/




