"use strict";

module.exports = function( grunt ) {
  grunt.initConfig({
    watch: {
      options: {
        nospawn: true,
        livereload: false,
      }
    },

    browserSync: {
      files: {
        src : [
          'css/*.css',
          '*.html'
        ],
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "."
        },
        ghostMode: {
          scroll: true,
          links : true,
          forms : true
        }
      },
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');

  grunt.registerTask('default', ["browserSync", "watch"]);
};
