/**
 * Created by Administrator on 2017/4/13.
 */
var LoginView = require( './views/login' ),
    ProfileView = require( './views/profile' ),
    AppBase = require( '../../utils/baseapp' ),
    $ = require( 'jquery' ),
    _ = require( 'underscore' );

_.extend( AppBase.prototype, {
    ShowLogin : function () {
        "use strict";
        var loginView = this.startController(LoginView);
      $( 'body' ).append( loginView.render().el );
        loginView.initUI();
    },
    ShowProfile : function () {
        "use strict";
        var profileView = this.startController(ProfileView);
        profileView.updateView( $('.content-wrapper') );
    }
} );
module.exports = AppBase;





