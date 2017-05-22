/**
 * Created by Administrator on 2017/3/30.
 */

module.exports = function ( grunt ) {
    "use strict";
    grunt.initConfig(
        {
            handlebars : {
                compile : {
                    options : {
                        namespace : false,
                        commonjs : true,
                        processName : function ( filename ) {
                            return filename.replace( 'app/templates/', '' ).replace( '.hbs', '' );
                        }
                    },
                    src : 'app/templates/**/*.hbs',
                    dest : 'app/templates/compiledTemplates.js'
                }
            },
            browserify : {
                options : {
                    debug : true,
                    alias : ['node_modules/rendr-handlebars/index.js:rendr-handlebars'],
                    aliasMappings: [{
                        cwd: 'app/',
                        src: ['**/*.js'],
                        dest: 'app/'
                    }],
                    shim: {
                        jquery: {
                            path: 'assets/vendor/jquery-1.9.1.min.js',
                            exports: '$'
                        }
                    }
                },
                app: {
                    src: ['app/**/*.js'],
                    dest: 'public/bundle.js'
                }
            }

    }
    );
};
