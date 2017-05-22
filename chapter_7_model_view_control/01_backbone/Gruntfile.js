/**
 * Created by Administrator on 2017/1/9.
 */

module.exports = function ( grunt ) {
    "use strict";
    grunt.initConfig( {
        clean : {
            build : [ 'build' ]
        },
        jshint : {
            client : [ 'js/app.js' ]
        },
        browserify : {
            options : {
                debug : true,
                transform : [ 'brfs' ]
            },
            debug : {
                files : {
                    'build/bundle.js' : 'app/app.js'
                }

            }
        },
        watch : {
                files : ['app/**/*.js'],
                tasks : [ 'browserify' ],
                options : {
                    interrupt : true
                }
        }
    } );

    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-contrib-clean' );


    grunt.registerTask( 'build:debug', [ 'clean', 'jshint' ,'browserify:debug' ] );

    grunt.registerTask( 'build:watch', [ 'build:debug',  'watch'  ] );


}
