/**
 * Created by Administrator on 2017/4/5.
 */

var fs = require( 'fs' ),
    glob = require( 'glob' ),
    mkdirp = require( 'mkdirp' ),
    browserify = require( 'browserify' ),
    proxyquire = require( 'proxyquireify' );

function browserifyTests(){
    "use strict";
    var done = this.async(),
        dir = __dirname + '/test/build',
        bundle ;
    mkdirp.sync(dir);
    bundle = browserify()
        .transform( 'brfs' )
        .plugin( proxyquire.plugin );
    glob.sync( './test/shoppingItems.js' )
        .map( resolve )
        .reduce( include, bundle )
        .bundle()
        .pipe( fs.createWriteStream( dir + '/test-bundle.js' ) )
        .on( 'done', done );

    function include( bundle, file ) {
        bundle.require( file, { entry : true } );
        return bundle;
    }
}

function resolve( file ) {
    "use strict";
    return require.resolve( file );
}

module.exports = function ( grunt ) {
    "use strict";
    grunt.initConfig( {
        clean : {
            app : [ 'src/build' ] ,
            tests : [ 'test/build' ],
            build : [ 'build' ]
        },
        browserify : {
            app : {
                files : {
                    'src/build/bundle.js' : [ 'src/event-entry.js' ]
                }
            },
            test : {
                files : {
                    'test/build/test-bundle.js' : [ 'test/routers.js' ]
                }
            },
            debug : {
                options : {
                    transform : [ 'brfs' ],
                    debug : true
                },
                files : {
                    'build/bundle.js' : [ 'app/app.js' ]
                }
            }
        },
        tape : {
            files : [ 'test/*.js' ]
        },
        photobox : {
            buildfirst : {
                options : {
                    urls : [ 'http://www.bing.com' ],
                    indexPath : 'build/photobox',
                    screenSizes : [ '320', '960', '1440' ]
                }
            }
        },
        pagespeed: {
            desktop: {
                url: 'https://ponyfoo.com/bf',
                locale: 'en_US',
                strategy: 'desktop',
                threshold: 80
            },
            mobile: {
                url: 'https://ponyfoo.com/bf',
                locale: 'en_US',
                strategy: 'mobile',
                threshold: 70
            },
            options: {
                key: 'AIzaSyAFuDkzU373DEuGuZErzTXYzr_oXVwKvwc'
            }
        },
        yslow : {
            options : {
                threshold : {
                    weight : 1000,
                    speed : 5000,
                    score : 80,
                    requests : 30
                }
            },
            buildfirst : {
                files : [
                    { src: 'http://bevacqua.io/bf' }
                ]
            }
        }
     /*   pagespeed : {
            desktop : {
                url : 'http://ajhb.tjftz.cn',
                locale: "en_GB",
                strategy : 'desktop',
                threshold : 80
            },
            options : {
                key : 'AIzaSyAFuDkzU373DEuGuZErzTXYzr_oXVwKvwc'
              /!*  nokey: true,
                url: "https://developers.google.com"*!/
            }
        }*/
    } );



    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-browserify' );
    grunt.loadNpmTasks( 'grunt-tape' );
    grunt.loadNpmTasks( 'grunt-testling' );
    grunt.loadNpmTasks( 'grunt-photobox' );
    grunt.loadNpmTasks( 'grunt-pagespeed' );
    grunt.loadNpmTasks( 'grunt-yslow' );

    grunt.registerTask( 'build', [ 'clean:app', 'browserify:app' ] );
    grunt.registerTask( 'build-test', [ 'clean:tests', 'browserify:test' ] );
    grunt.registerTask( 'build-debug', [ 'clean:build', 'browserify:debug' ] );

    grunt.registerTask( 'browserify_tests', browserifyTests );

    grunt.registerTask( 'test', [ 'tape' ] );

    grunt.registerTask( 'bs-test', [ 'testling' ] );

    grunt.registerTask( 'photobox' , [ 'photobox' ] );


};
