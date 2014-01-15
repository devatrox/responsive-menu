module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      dev: ['Gruntfile.js', 'src/jquery.responsive-menu.js']
    },
    sass: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("isoDateTime") %> */\n'
      },
      dev: {
        options: {
          noCache: true
        },
        files: {
          'dist/jquery.responsive-menu.css': ['src/jquery.responsive-menu.scss']
        }
      }
    },
    copy: {
      dist: {
        expand: true,
        cwd: 'src/',
        src: 'jquery.responsive-menu.js',
        dest: 'dist/'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("isoDateTime") %> */\n'
      },
      dist: {
        files: {
          'dist/jquery.responsive-menu.min.js': ['dist/jquery.responsive-menu.js']
        }
      }
    },
    cssmin: {
      options: {
        keepSpecialComments: 0,
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - <%= grunt.template.today("isoDateTime") %> */\n'
      },
      dist: {
        files: {
          'dist/jquery.responsive-menu.min.css': ['dist/jquery.responsive-menu.css']
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', ['sass:dev', 'jshint:dev']);
  grunt.registerTask('dist', ['sass:dev', 'copy:dist', 'uglify:dist', 'cssmin:dist']);

};
