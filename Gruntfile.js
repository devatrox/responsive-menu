module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dev: ['jquery.responsive-menu.js']
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dev: {
        options: {
          noCache: true
        },
        files: {
          'jquery.responsive-menu.css': ['jquery.responsive-menu.scss'],
          'test/style.css': ['test/style.scss']
        }
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'jquery.responsive-menu.min.js': ['jquery.responsive-menu.js']
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          'jquery.responsive-menu.min.css': ['jquery.responsive-menu.css']
        }
      }
    },
    watch: {
      css: {
        files: ['**/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: '<%= jshint.dev %>',
        tasks: ['jshint']
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dist', ['sass:dev', 'uglify:dist', 'cssmin:dist']);

};
