/**
 * Created by Administrator on 2017/4/13.
 */

module.exports = function ( grunt ) {
    "use strict";
    grunt.initConfig( {
        browserify : {
            debug : {
                files : {
                    'public/bundle.js' : 'public/main.js'
                },
                options : {
                    transform : [ 'brfs' ],
                    debug : true
                }
            }
        }
    } );

    grunt.loadNpmTasks( 'grunt-browserify' );

    grunt.registerTask( 'build:debug', [ 'browserify:debug' ] );
};
