/**
 * Created by Administrator on 2016/11/19.
 */

var util = require( 'util' );
var path = require( 'path' );
var cwd = process.cwd();
var pemkey = function (name) {
    var filename = util.format('private/%s.pem', name);
    return path.join(cwd, filename);
};

module.exports = function ( grunt ) {
    grunt.initConfig(
        {
            clean : {
                build: 'build'
            },
            jshint : {
                client : [ 'public/js/**/*.js' ]
            },
            useminPrepare: {
              html: ['public/app/**/*.html'],
                     options: {
                       // 测试发现这里指定的dest，是usemin引入资源的相对路径的开始
                          // 在usemin中设置assetsDirs，不是指定的相对路径
                       // List of directories where we should start to look for revved version of the assets referenced in the currently looked at file
                        dest: 'build/app'               // string type
                      }
           },

            less : {
                debug : {
                    files : {
                        'build/css/classes.css' : 'public/css/classes.less',
                        'build/css/elements.css' : 'public/css/elements.less',
                        'build/css/layout.css' : 'public/css/layout.less'                         
                    }
                },
                release : {
                    options : {
                        yuicompress : true
                    },
                    files : {
                        'build/css/all.css' : [
                            'public/css/*.less'
                        ]
                    }
                }               
            },
            jade : {
                debug : {
                    options : {
                        pretty : true,
                        data : {
                            debug : true
                        }
                    },
                    files : {
                        'build/views/home.html' : 'public/views/home.jade'
                    }
                },
                release : {
                    options : {
                        data : {
                            debug : false
                        }
                    },
                    files : {
                        'build/views/home.html' : 'public/views/home.jade'
                    }
                }
            },
            copy : {
                js_debug : {
                    expand : true,
                    cwd : 'public/js',
                    src : '**/*.js',
                    dest : 'build/js/'
                },
                img_release : {
                    expand : true,
                    cwd : 'public/img',
                    src : '**/*.jpg',
                    dest : 'build/img/'
                },
                app_release : {
                    expand : true,
                    cwd : 'public/app',
                    src : '**/*.*',
                    dest : 'build/app/'
                }
            },
            concat : {
                release : {
                    files : {
                        'build/js/bundle.js' : [ 'public/js/**/*.js' ]
                    }
                }
            },
            uglify : {
                options: {
                    mangle: true
                },
                release : {
                    files : {
                        'build/js/all.min.js' : [ 'build/js/bundle.js' ]
                    }
                }
            },
            timestamp : {
                options : {
                    file : 'your/file/path'
                }
            },
            pem_gen : {
                foo : { pem : pemkey( 'foo' ) },
                bar : { pem : pemkey( 'bar' ) }
            },
            pem_encrypt : {
                foo : {
                    pem : pemkey( 'foo' ),
                    pemstore : 'security/foo',
                    rawstore : 'private/db.json'
                }
            },
            watch : {
                livereload : {
                    options : {
                        livereload : true
                    },
                    files : [ 'public/**/*.{css, js}' ]
                },
                js : {
                    tasks : [ 'copy:debug' ],
                    files : [ 'public/js/**/*.js', 'views/**/*.html' ]
                },
                less : {
                    tasks : [ 'less:debug' ],
                    files : [ 'public/css/**/*.js' ]
                },
                jade : {
                    tasks : [ 'jade:debug' ],
                    files : [ 'public/views/**/*.jade' ]

                }/*,
                rebuild : {
                    tasks : [ 'build:debug' ],
                    files : [ 'public/!**!/!*' ]
                }*/
            },
            nodemon : {
                dev : {
                    script : 'app.js'
                }
            },
            concurrent : {
                dev : {
                    tasks : [ 'nodemon', 'watch' ],
                    options : {
                        logConcurrentOutput: true
                    }
                }
            },
            imagemin : {
                release : {
                    files : [ {
                        expand : true,
                        src : 'build/img/**/*.jpg'
                    }  ],
                    options : {
                        progressive : true
                    }
                }
            },
            rev : {
                release : {
                    files : {
                        src : [ 'build/**/*.{css,js,png}' ]
                    }
                }
            },
            usemin : {
                html : [ 'build/app/**/*.html' ],
                options: {
                       assetsDirs: ['build/app']
            }
               /* view_css : [ 'build/views/!**!/!*.css' ],
                app_html : [ 'build/app/!**!/!*.html' ],
                app_css : [ 'build/app/!**!/!*.css' ]*/
            },
            critical: {
                release: {
                    options: {
                        base: './',
                        css: [
                            'page.css'
                        ]
                    },
                    src: 'views/page.html',
                    dest: 'build/page.html'
                }
            },
            cssmin : {
                release: {
                    files: [
                        {
                        expand: true,
                        cwd: 'build/css',
                        src: ['*.css', '!*.min.css'],
                        dest: 'build/css',
                        ext: '.min.css'
                    },
    {
        'public/css/tjx.lib.min.css':
        [
            'public/css/glb/font-awesome/css/font-awesome.min.css',
            'public/css/glb/simple-line-icons/simple-line-icons.min.css',
            'public/css/glb/bootstrap/css/bootstrap.min.css',
            'public/css/glb/bootstrap-modal/css/bootstrap-modal-bs3patch.css',
            'public/css/glb/bootstrap-modal/css/bootstrap-modal.css',
            'public/css/glb/fancybox/source/jquery.fancybox.css',
            'public/css/portfolio.css',
            'public/css/glb/uniform/css/uniform.default.css',
            'public/css/glb/bootstrap-datepicker/css/datepicker3.css',
            'public/css/glb/css/components-rounded.css',
            'public/css/glb/css/plugins.css',
            'public/css/glb/css/layout.css',
            'public/css/glb/typeahead/typeahead.css',
            'public/css/glb/datatables/plugins/bootstrap/dataTables.bootstrap.css',
            'public/css/glb/datatables/button/css/buttons.bootstrap.min.css'
        ]
    }

                    ]
                }
            },
            htmlmin : {
                release: {                                      // Target
                    options: {                                 // Target options
                        removeComments: true,
                        collapseWhitespace: true
                    },
                    files: [{                                   // Dictionary of files
                        expand: true,     // Enable dynamic expansion.
                        cwd: 'public/views',      // Src matches are relative to this path.
                        src: '**/*.html', // Actual pattern(s) to match.
                        dest: 'build/views'   // Destination path prefix.
                    }]
                }
            },
            bump : {
                options : {
                    commit : true,
                    createTag : true,
                    push : true
                }
            }

          /*  db : {
                create : {
                    options : options
                },
                update : {
                    options : options
                },
                rollback : {
                    options : options
                },
                seed : {
                    options : options
                }
            }*/

        }
    );
   /* grunt.loadTask('task');*/
    grunt.registerTask( 'timestamp', function () {
        var options = this.options( {
            file : '.timestamp'
        } );
        var timestamp =+ new Date();
        var contents = timestamp.toString();
        grunt.file.write( options.file, contents );
    } );

    grunt.loadNpmTasks( 'grunt-contrib-clean' );
    grunt.loadNpmTasks( 'grunt-contrib-jshint' );
    grunt.loadNpmTasks( 'grunt-contrib-less' );
    grunt.loadNpmTasks( 'grunt-contrib-jade' );
    grunt.loadNpmTasks( 'grunt-contrib-copy' );
    grunt.loadNpmTasks( 'grunt-contrib-concat' );
    grunt.loadNpmTasks( 'grunt-contrib-uglify' );
    grunt.loadNpmTasks( 'grunt-pemcrypt' );
    grunt.loadNpmTasks( 'grunt-contrib-watch' );
    grunt.loadNpmTasks( 'grunt-nodemon' );
    grunt.loadNpmTasks( 'grunt-concurrent' );
    grunt.loadNpmTasks( 'grunt-contrib-imagemin' );
    grunt.loadNpmTasks( 'grunt-rev' );
    grunt.loadNpmTasks( 'grunt-usemin' );
    grunt.loadNpmTasks( 'grunt-critical' );
    grunt.loadNpmTasks( 'grunt-contrib-cssmin' );
    grunt.loadNpmTasks( 'grunt-contrib-htmlmin' );
    grunt.loadNpmTasks( 'grunt-bump' );

    grunt.registerTask( 'build:debug',
        'Lint and compile',
        [ 'clean', 'jshint', 'less:debug', 'jade:debug', 'copy:js_debug' ] );
    grunt.registerTask( 'build:release',
        'Lint, compile, bundle and optimize' ,
        [ 'clean', 'jshint', 'useminPrepare',  'less:release', 'jade:release',
             'concat:release', 'uglify:release', 'copy:img_release', 'copy:app_release',
            'imagemin:release', 'rev:release', 'usemin'/*, 'critical:release'*/ ,
            'cssmin:release', 'htmlmin:release', 'bump' ] );

    grunt.registerTask( 'critical', 'clean and critical' , [   'critical:release'] );

    grunt.registerTask( 'pem', [ 'pemcrypt' ] );
    grunt.registerTask( 'dev', [ 'build:debug', 'concurrent' ] );



   /* grunt.registerTask( 'db_setup' , [ 'db:create', 'db:update', 'db:seed' ] );*/
};
