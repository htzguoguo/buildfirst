/**
 * Created by Administrator on 2016/12/27.
 */

module.exports = function ( grunt ) {
    grunt.initConfig(
        {
            browserify : {
                debug : {
                    files : {
                        'js/serial_flow.js' : 'serial_flow.js',
                        'js/map.js' : 'map.js',
                        'js/sort.js' : 'sort.js',
                        'js/queue.js' : 'queue.js'
                    }
                }
            }
        }
    );

    grunt.loadNpmTasks( 'grunt-browserify' );

    grunt.registerTask( 'build:debug', [ 'browserify:debug' ] );

};
