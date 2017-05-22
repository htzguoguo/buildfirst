/**
 * Created by Administrator on 2016/12/28.
 */

module.exports = function ( grunt ) {
    grunt.initConfig(
        {
            browserify : {
                debug : {
                    files : {
                        'js/promise_basic.js' : 'promise_basic.js',
                        'js/getGithubUsers.js' : 'getGithubUsers.js',
                        'js/promise_all.js' : 'promise_all.js'
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.registerTask( 'build:debug', [ 'browserify:debug' ] );
};
