/**
 * Created by Administrator on 2016/12/12.
 */


function getUser( res ) {
        jQuery.get( '/client/' + res.id ).done( function ( res ) {
            done( false, res );
        } ).fail( done );
};

function getRegion( res ) {
        jQuery.get( '/regions/' + res.region ).done( getUser ).fail( done );
};

function getClient() {
    jQuery.get( '/userbyemail/2ss@gmail.com').done( getRegion ).fail( done);
}

getClient();

function done( err, res ) {
    if ( err ) {
        document.body.innerHTML = err.responseText;
    }else {
        document.body.innerHTML = "my name is " + res.name;
    }
}
