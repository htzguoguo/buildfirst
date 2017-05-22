/**
 * Created by Administrator on 2016/12/12.
 */

document.addEventListener( 'click', onClickHandler);

function onClickHandler() {
    var id,
        endpoint = '/user/list';
    jQuery.get( endpoint, function ( res ) {
        document.body.innerHTML = res.title;
        reportStatus( res.title, function ( res ) {
            console.log( res );
        } );
    } );
};

function reportStatus( status, then ) {
    document.body.innerHTML = status;
    then( status );
};

