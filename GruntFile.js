module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'css/build/error.css': 'css/error.css',
                    'css/build/main.css': 'css/main.css',
                }
            }
        },
        watch: {
            styles: {
                files: ['css/error.css','css/main.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};