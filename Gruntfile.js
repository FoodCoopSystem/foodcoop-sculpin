module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Compress & uglify js.
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['source/src-js/global.js', 'source/src-js/global.js'],
                dest: 'source/js/<%= pkg.name %>.min.js'
            }
        },
        jshint: {
            files: ['Gruntfile.js', 'source/src-js/*.js', 'source/test-js/*.js'],
            options: {
                globals: {
                    jQuery: true
                }
            }
        },
        // Compass settings.
        compass: {
            src: 'source/scss/',
            dest: 'source/css/',
            linecomments: false,
            outputstyle: 'compressed'
        },
        // Sculpin prod
        'sculpin-generate': {
            options: {
                bin: 'php sculpin.phar'
            },
            build: {
                args: {
                    env: 'prod'
                }
            }
        },
        watch: {
            files: ['source/scss/*.scss', 'source/src-js/global.js', 'source/src-js/global.js'],
            tasks: ['compass', 'uglify']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-sculpin');
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'sculpin-generate']);
};