module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    jshint: {
      dev: ['<%= pkg.name %>.js']
    },

    sass: {
      options: {
        noCache: true
      },
      dist: {
        files: {
          '<%= pkg.name %>.css': ['<%= pkg.name %>.scss']
        }
      },
      test: {
        files: {
          'test/style-sass.css': ['test/style.scss']
        }
      }
    },

    replacements: require('./node_modules/grunt-refactor/replacements').init(grunt),

    refactor: {
      SassToLess: {
        options: {
          replacements: '<%= replacements.regex.sass %>'
        },
        files: {
          '<%= pkg.name %>.less': '<%= pkg.name %>.scss'
        }
      }
    },

    less: {
      test: {
        files: {
          'test/style-less.css': ['test/style.less']
        }
      }
    },

    uglify: {
      dist: {
        files: {
          '<%= pkg.name %>.min.js': ['<%= pkg.name %>.js']
        }
      }
    },

    cssmin: {
      dist: {
        options: {
          keepSpecialComments: 0
        },
        files: {
          '<%= pkg.name %>.min.css': ['<%= pkg.name %>.css']
        }
      }
    },

    usebanner: {
      dist: {
        options: {
          banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          src: [
            '<%= pkg.name %>.min.css',
            '<%= pkg.name %>.min.js'
          ]
        }
      }
    },

    watch: {
      styles: {
        files: ['**/*.scss', 'test/style.less'],
        tasks: ['compile']
      },

      js: {
        files: '<%= jshint.dev %>',
        tasks: ['jshint']
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('compile', ['sass', 'refactor', 'less']);
  grunt.registerTask('default', ['compile', 'watch']);
  grunt.registerTask('dist', ['compile', 'uglify', 'cssmin', 'usebanner']);

};
