/**
 * Created by Administrator on 2016/12/27.
 */

function flow( steps, done ) {
    function factory () {
        var used;
        return function next() {
            if ( used ) {
                return;
            }
            used = true;
            var step = steps.shift();
            if ( step ) {
                var args = Array.prototype.slice.call( arguments );
                var err = args.shift();
                if ( err ) {
                    done( err );
                    return;
                }
                args.push( factory() );
                steps.apply( null, args );
            }else {
                done.apply( null, arguments );
            }
        };
    }
    var start = factory();
    start();
}
