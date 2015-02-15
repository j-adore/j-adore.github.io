module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jade: {
      compile: {
        files: {
          "index.html": ["assets/raw/jade/index.jade",]
        }
      }
    },
    sass: {
      dist: {
        files: {
          'assets/build/css/main.css': 'assets/raw/sass/main.sass'
        }
      }
    },
    concat: {
      js: {
        src: ['assets/raw/js/scripts.js'],
        dest: 'assets/build/js/main.js',
      },
      css: {
        src: ['assets/build/css/main.css'],
        dest: 'assets/build/css/concat.css',
      },
    },
    uglify: {
      js: {
        files: {
          'assets/load/main.min.js': ['assets/build/js/main.js',]
        }
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/load/css/main.min.css': ['assets/build/css/concat.css',]
        }
      }
    },
    watch: {
      js: {
        files: ['assets/build/js/main.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['assets/build/css/main.css'],
        tasks: ['concat:css'],
      },
      uglify: {
        files: ['assets/build/js/*.js'],
        tasks: ['uglify:js'],
      },
      cssmin: {
        files: ['assets/build/css/*.css'],
        tasks: ['cssmin:css'],
      },
      jade: {
        files: ['assets/raw/jade/index.jade'],
        tasks: ['jade'],
      },
      sass: {
        files: ['assets/raw/sass/main.sass'],
        tasks: ['sass'],
      },
    },
});

  // Load the plugins
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['jade', 'sass', 'concat', 'uglify', 'cssmin', 'watch']);
};