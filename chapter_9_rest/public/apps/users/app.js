/**
 * Created by Administrator on 2017/4/13.
 */

var LoginView = require( './views/login' ),
    ProfileView = require( './views/profile' ),
    AppBase = require( '../../utils/baseapp' ),
    $ = require( 'jquery' ),
    _ = require( 'underscore' ), App;

App = function ( options ) {
    "use strict";
    this.currentController = null;
    this.mainRegion = options.mainRegion;
    this.bodyRegion = options.bodyRegion;
    this.GetName = function () {
        return 'UsersApp';
    };
    this.ShowLogin = function () {
        "use strict";
        var loginView = this.startController(LoginView);
         $( 'body' ).append( loginView.render().el );

        //this.bodyRegion.show( loginView );
        loginView.initUI();
    };

    this.ShowProfile = function () {
        "use strict";
        var profileView = this.startController(ProfileView);
        profileView.updateView( $('.content-wrapper') );
    };
};

_.extend(App.prototype, AppBase );




module.exports = App;






