const gutil = require('gulp-util')
const _     = require('lodash');
const env   = gutil.env.env || 'development';
console.log(env);

var paths = { 
    default: {
        src: { 
            js: 'app/scripts/main.js', //use to target js entryPoint
            scripts:'app/scripts/**/*', //use to watch / grab all scripts files
            images:'app/images/**/*',
            fonts:'app/fonts/**/*',
            templates:'app/templates/**/*.hbs',
            html: 'app/*.html', 
            css: 'app/styles/*.scss',
            jsFilename:'main.js'
        }, 
        dest: { 
            js: 'dev/scripts', 
            constants: 'dev/', 
            html: 'dev/', 
            css: 'dev/styles',
            images:'dev/images',
            jsFilename:'bundle.js'
        } 
    },
    development: {

    },
    staging: {
        dest: { 
            js: 'staging/scripts', 
            constants: 'staging/', 
            html: 'staging/', 
            css: 'staging/styles',
            images:'staging/images',
        } 
    },
    production: {
        dest: { 
            js: 'prod/scripts', 
            constants: 'prod/', 
            html: 'prod/', 
            css: 'prod/styles'
        }
    }
};

var constants = {
    default: {
        appName: 'freshdeskTest',
    },
    development: {
    },
    staging: {
    },
    production: {
    }
};

var run = {
    default: {
        js: {
            uglify: false
        },
        css: {
            cssnano: false
        }
    },
    development: {
        js: {
            uglify: false
        },
        css: {
            cssnano: false
        }
    },
    staging: {
        js: {
            uglify: true
        },
        css: {
            cssnano: true
        }
    },
    production: {
        js: {
            uglify: true
        },
        css: {
            cssnano: true
        }
    }
};

var plugin = {
    default: {
        js: {
            browserSync:{
                port:9010,
                baseDir:['dev', 'app']
            },
            browserify:{
                debug:true,
                transform:{
                    stripify:false
                }
            },
            uglify: {
                mangle: false
            }
        }
    },
    development: {
        js: {
        }
    },
    staging: {
        js: {
            browserSync:{
                port:9010,
                baseDir:['staging']
            },
            browserify:{
                debug:false,
                transform:{
                    stripify:true
                }
            },
            uglify: {
                mangle: true
            }
        }
    },
    production: {
        js: {
            browserSync:{
                port:9010,
                baseDir:['prod']
            },
            browserify:{
                debug:false,
                transform:{
                    stripify:true
                }
            },
            uglify: {
                mangle: true
            }
        }
    }
};

var pathOpts = _.merge( {}, paths.default, paths[ env ] );
var runOpts = _.merge( {}, run.default, run[ env ] );
var pluginOpts = _.merge( {}, plugin.default, plugin[ env ] );
var constantsOpts = _.merge( {}, constants.default, constants[ env ]
);
module.exports.paths = pathOpts;
module.exports.constants = constantsOpts;
module.exports.run = runOpts;
module.exports.plugin = pluginOpts;