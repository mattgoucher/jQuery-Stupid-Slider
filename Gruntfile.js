module.exports = function(grunt) {

  var packageBanner = '/*!\n' +
                      ' * <%= pkg.name.split("-").join(" ") %> v<%= pkg.version %>\n' +
                      ' * mattgoucher.com\n *\n' +
                      ' * Matt Goucher <matt@mattgoucher.com>\n' +
                      '*/\n';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    uglify: {
      options: {
        report: 'min',
        banner: packageBanner
      },
      build: {
        src: [
          'js/lib/jquery-1.10.2.min.js',
          //'js/lib/modernizr-2.7.1.min.js',
          'js/main.js'
        ],
        dest: 'build/main.min.js'
      }
    },
    watch: {
      scripts: {
        files: 'js/**/*.js',
        tasks: 'js',
        options: {
          spawn: false
        }
      },
      css: {
        files: 'css/**/*.css',
        tasks: 'css',
        options: {
          spawn: false
        }
      }
    },
    jshint: {
      files: 'js/**/*.js',
      options: {
        // Ignore library files, because they never lint
        ignores: ['js/lib/*.js']
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  grunt.registerTask('js', ['jshint', 'uglify']);
  grunt.registerTask('default', ['jshint', 'cssmin', 'uglify']);

};
