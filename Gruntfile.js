module.exports = function(grunt) {
    // Project Configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            files: ['**/*.hmlt', '**/*.css'],
            tasks: ['htmlmin', 'imagemin', 'compress']
        },
        htmlmin: {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'dist/'
                }]
            },
            dev: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.html'],
                    dest: 'dev/'
                }]
            }
        },
        imagemin: {
            dist: {
                options: {
                    optimizationLevel: 7,
                    svgoPlugins: [
                        { removeViewBox: true },
                        { removeUselessStrokeAndFill: true },
                        { removeEmptyAttrs: true }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dev/'
                }]
            },
            dev: {
                options: {
                    optimizationLevel: 7,
                    svgoPlugins: [
                        { removeViewBox: true },
                        { removeUselessStrokeAndFill: true },
                        { removeEmptyAttrs: true }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'dev/'
                }]
            }
        },
        compress: {
            dist: {
                options: {
                    mode: 'gzip',
                    pretty: true
                },
                expand: true,
                cwd: 'src/',
                src: ['**/*'],
                dest: 'dist/'
            }
        }
    });
   // Load the plugin that provides the "watch" task.
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Load the plugin that provides the "htmlmin" task.
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    // Load the plugin that provides the "compress" task.
    grunt.loadNpmTasks('grunt-contrib-compress');
    // Load the plugin that provides the "imagemin" task.
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    // Default task runt using "grunt" on the command line
    grunt.registerTask('default', ['htmlmin', 'imagemin', 'compress']);
};