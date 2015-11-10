module.exports = function(grunt) {
    // Load grunt plugins.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.initConfig({
        stylus: {
            compile: {
                options: {
                    compress: true,
                    paths: ['source/stylus']
                },
                files: {
                    'public/css/style.css': 'public/stylus/style.styl',
                    'public/css/mediaqueries/any.css': 'public/stylus/mediaqueries/any.styl',
                    'public/css/mediaqueries/desktop.css': 'public/stylus/mediaqueries/desktop.styl',
                    'public/css/mediaqueries/ipad.css': 'public/stylus/mediaqueries/ipad.styl',
                    'public/css/mediaqueries/iphone4.css': 'public/stylus/mediaqueries/iphone4.styl',
                    'public/css/mediaqueries/iphone5.css': 'public/stylus/mediaqueries/iphone5.styl',
                    'public/css/mediaqueries/iphone6.css': 'public/stylus/mediaqueries/iphone6.styl',
                    'public/css/mediaqueries/iphone6p.css': 'public/stylus/mediaqueries/iphone6p.styl',
                    'public/css/mediaqueries/galaxy.css': 'public/stylus/mediaqueries/galaxy.styl'
                }
            }
        },

        autoprefixer: {
            compile: {
                files: {
                    'public/css/style.css': 'public/css/style.css'
                },
            },
        },

        cssmin: {
            clean: {
                files: {
                    'public/css/style.css': 'public/css/style.css'
                }
            }
        },

        watch: {
            stylus: {
                files: ['public/stylus/**/*.styl'],
                tasks: ['stylus', 'autoprefixer', 'cssmin']
            }
        },
    });

    grunt.registerTask('default', ['stylus', 'autoprefixer', 'cssmin']);
};
