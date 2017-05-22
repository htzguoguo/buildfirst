/**
 * Created by Administrator on 2016/12/12.
 */

document.addEventListener( 'click', function () {
    var id,
        endpoint = '/user/list';
    jQuery.get( endpoint, function ( res ) {
        document.body.innerHTML = res.title;
    } );
} );
