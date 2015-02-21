module.exports = function(grunt) {
	grunt.initConfig({
  concat: {
    js: {
      src: ['assets/js/project.js'],
      dest: 'assets/build/js/scripts.js',
    },
    css: {
      src: ['assets/css/main.css'],
      dest: 'assets/build/css/styles.css',
    },
  },
  watch: {
    js: {
      files: ['asstes/js/*.js'],
      tasks: ['concat:js'],
    },
    css: {
      files: ['assets/css/*.css'],
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
      files: ['assets/index.jade'],
      tasks: ['jade'],
    },
    sass: {
      files: ['assets/sass/main.sass'],
      tasks: ['sass'],
    },
  },
  uglify: {
    js: {
      files: {
        'assets/pageLoad/js/scripts.min.js': ['assets/build/js/scripts.js']
      }
    }
  },
  cssmin: {
  	css: {
    	files: {
      	'assets/pageLoad/styles.min.css': ['assets/build/css/styles.css']
    	}
  	}
  },
  connect: {
    server: {
      options: {
        port: 9001,
        base: 'www-root'
      }
    }
  },
  jade: {
    compile: {
      options: {
        data: {
          debug: true
        }
      },
      files: {
      "index.html": ["assets/index.jade"]
      }
    }
  },
  sass: {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {                      
        'assets/css/main.css': 'assets/sass/main.sass'
      }
    }
  },
 });


  //Grunt Loads
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.registerTask('default', ['jade', 'sass', 'concat', 'uglify', 'cssmin', 'watch']);
};