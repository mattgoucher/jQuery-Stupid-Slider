module.exports = function(grunt) {

  var packageBanner = '/*!\n' +
                      ' * <%= pkg.name.split("-").join(" ") %> v<%= pkg.version %>\n' +
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
        src: 'jquery.stupid-slider.js',
        dest: 'dist/jquery.stupid-slider.min.js'
      }
    },
    watch: {
      scripts: {
        files: 'js/**/*.js',
        tasks: 'js',
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
  grunt.registerTask('default', ['jshint', 'uglify']);

};
