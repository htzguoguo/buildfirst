/**
 * Created by Administrator on 2017/3/20.
 */

module.exports = function ( grunt ) {
    "use strict";
    grunt.initConfig(
        {
            browserify : {
                debug : {
                    files : {
                        'js/bundle.js' : 'js/app.js'
                    },
                    options : {
                        transform : [ 'brfs' ],
                        debug : true
                    }
                }
            },
            watch : {
                app : {
                    files : 'js/*.js',
                    tasks : [ 'browserify' ]
                }
            }
        }
    );

    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-browserify' );

    grunt.registerTask( 'build:debug', [  'browserify:debug' ] );
    grunt.registerTask( 'build:watch', [ 'watch' ] );
};
