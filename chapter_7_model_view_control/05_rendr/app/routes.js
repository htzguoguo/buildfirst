/**
 * Created by Administrator on 2017/3/31.
 */

module.exports = function ( match ) {
    "use strict";
    match( '', 'home#index' );
    match( 'users', 'users#index' );
    match( 'users/:login', 'users#show' );
};
