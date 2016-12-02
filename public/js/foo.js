/**
 * Created by Administrator on 2016/11/21.
 */



( function (  ) {
    'use strict';
    var member = 0;
    window.foo = {
        bar : function () {
            return member;
        },
        inc : function () {
            member++;
        },
        set : function ( value ) {
            member = value;
        }
    };

} )( window );
