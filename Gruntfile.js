module.exports = function (grunt) {
    grunt.initConfig({
        sass: {
            // node-sass options
            options: {
                outputStyle: 'expanded',
                sourceMap: true
            },
            // grunt-sass options
            dist: {
                files: [{
                    expand: true,
                    cwd: 'sass/',
                    src: '**/*.scss',
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        watch: {
            source: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: false, // needed to run LiveReload
                }
            }
        }
    });
    // Load the plugins:
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Simply type 'grunt' in the command line and Grunt will run the 'sass' task and then the 'watch' task
    grunt.registerTask('default', ['sass', 'watch']);
};