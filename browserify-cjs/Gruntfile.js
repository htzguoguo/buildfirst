/**
 * Created by Administrator on 2016/12/7.
 */

module.exports = function ( grunt ) {
    grunt.initConfig(
        {
            clean : {
                build : 'build'
            },
            browserify : {
                debug : {
                    files : {
                        'build/js/app.js' : 'js/app.js'
                    },
                    options : {
                        debug : true
                    }
                },
                release : {
                    files : {
                        'build/js/app.js' : 'js/app.js'
                    }
                }
            },
            uglify : {
                release : {
                    files : {
                        'build/js/app.min.js' : 'build/js/app.js'
                    }
                }
            },
            copy : {
                release : {
                    files : {
                        'build/' : '*.html'
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );

    grunt.registerTask( 'build:debug', [ 'clean', 'browserify:debug' , 'copy:release'] );
    grunt.registerTask( 'build:release', [ 'clean', 'browserify:release', 'uglify:release', 'copy:release' ] );
};
