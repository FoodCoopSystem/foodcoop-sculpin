module.exports = function (grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        //Compress & uglify js.
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: ['source/src-js/slider.js', 'source/src-js/global.js'],
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
        // Sculpin config.
        'sculpin-serve': {
            options: {},
            build: {}
        },
        'sculpin-generate': {
            options: {},
            build: {}
        },
        'sculpin-watch': {
            options: {},
            build: {}
        },
        //Watch config.
        watch: {
            files: ['source/sass/*.scss', 'source/src-js/slider.js', 'source/src-js/global.js', 'source/_views/default-pl.html' ],
            tasks: ['uglify', 'compass', 'grunt-sculpin', 'sculpin-generate', 'sculpin-watch']
        }

    });
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-compass');
    grunt.loadNpmTasks('grunt-sculpin');
    grunt.registerTask('default', ['jshint', 'uglify', 'compass', 'sculpin-generate', 'sculpin-watch']);
};