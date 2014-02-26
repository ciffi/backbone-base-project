// usage:
// install node!!!
// npm install -g grunt-cli
// npm-install
// grunt

module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            dev: {
                options: {
                    mainConfigFile: 'build-config-dev.js',
                    out: 'target/spa-<%= pkg.name %>.js'
                }
            },
            prod: {
                options: {
                    mainConfigFile: 'build-config-prod.js',
                    out: 'target/spa-<%= pkg.name %>.js'
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    amd: "true"
                },
                files: {
                    "target/module-templates.js": ["js/templates/**/*.hbs"]
                }
            }
        },
        clean: {
            build: ["target"],
        },
        /*copy: {
            main: {
                files: [
                    {
                        expand: true,
                        force: true,
                        cwd: '.target/',
                        src: ['*'],
                        dest: 'phonegap-mibac/platforms/ios/www/static/js/',
                        filter: 'isFile'
                    },
                    {
                        expand: true,
                        force: true,
                        cwd: './static/css/',
                        src: ['*'],
                        dest: 'phonegap-mibac/platforms/ios/www/static/css'
                    },
                    {
                        expand: true,
                        force: true,
                        cwd: './static/js/',
                        src: ['appRouter.js'],
                        dest: 'phonegap-mibac/platforms/ios/www/static/js/',
                        filter: 'isFile'
                    }
                ]
            }
        },*/
        watch: {
            scripts: {
                files: ['js/**/*.js', 'js/templates/**/*.hbs', 'scss/*.scss'],
                tasks: ['build'],
                options: {
                    nospawn: false
                }
            },
            sass: {
                files: ['static/sass/**/*.scss'],
                tasks: ['sass:dev']
            }
        },
        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: true,
                    noCache: true
                },
                files: {
                    'static/css/style.css': 'static/sass/style.scss'
                }
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: false,
                    noCache: false
                },
                files: {
                    'static/css/style.css': 'static/sass/style.scss'
                }
            }
        },
        imagemin: {
            dynamic: {
                files: {
                    expand: true,
                    cwd: 'static/img/',
                    src: ['**/*.{png,jpg,gif,JPG,PNG}'],
                    dest: 'static/img/'
                }
            }
        }
    });

    // Load the plugins 
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-clean');
    //grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task(s).
    grunt.registerTask('default', ['watch']);

    grunt.registerTask('build', ['clean', 'handlebars', 'sass:dev', 'requirejs:dev']);

    // deploy with prod variables
    grunt.registerTask('build_prod', ['clean', 'handlebars', 'sass:prod', 'requirejs:prod']);

    //attivo i chrome dev tools di grunt || https://github.com/vladikoff/grunt-devtools#quick-setup - alessio ;)
    //in console grunt devtools
    //grunt.loadNpmTasks('grunt-devtools');

};




