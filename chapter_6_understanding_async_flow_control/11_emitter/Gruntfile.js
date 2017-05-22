/**
 * Created by Administrator on 2017/1/2.
 */

module.exports = function ( grunt ) {

    grunt.initConfig(
        {
            jshint : {
                client : [ '*.js' ]
            },
            browserify : {
                debug : {
                    files : {
                        'js/consumer.js' : 'consumer.js'
                    }
                }

            }

        }
    );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-browserify' );

    grunt.registerTask( 'build:debug', [ 'jshint', 'browserify' ] );

};
