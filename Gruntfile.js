"use strict";

module.exports = function( grunt ) {
  grunt.initConfig({
    aws: {
      "accessKeyId" : process.env.AWS_ACCESS_KEY_ID,
      "secretKey"   : process.env.AWS_SECRET_KEY,
      "bucket"      : process.env.AWS_BUCKET,
    },

    aws_s3: {
      options: {
        accessKeyId         : '<%= aws.accessKeyId %>',
        secretAccessKey     : '<%= aws.secretKey %>',
        region              : 'sa-east-1',
        uploadConcurrency   : 5,
        downloadConcurrency : 5,
        bucket              : '<%= aws.bucket %>',
        differential        : true,
        displayChangesOnly  : true,
      },
      deploy: {
        files: [
          {expand: true, cwd: "./build", src: ['**/*'], stream: true, params: { ContentEncoding: 'gzip' }},
        ],
      },
    },

    compress: {
      main: {
        options: { mode: 'gzip' },
        files: [
          { expand: true , src: ['index.html'] , dest: './build/' },
          { expand: true ,
            src: [
              'assets/**/*',
              'css/**/*',
              'fonts/**/*',
              'ico/**/*',
              'images/**/*',
              'js/**/*',
            ] ,
            dest: './build/'
          },
        ]
      }
    },

    watch: {
      options: {
        nospawn: true,
        livereload: false,
      }
    },

    clean: {
      build : [
        "build/*",
      ],
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          src: ['images/**/*.{png,jpg,gif}'],
        }]
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

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-browser-sync');
  grunt.loadNpmTasks('grunt-aws-s3');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-newer');

  grunt.registerTask('default', ["browserSync", "watch"]);
  grunt.registerTask('assets',  ["imagemin"]);
  grunt.registerTask('compile', ["clean:build", "newer:compress:main"]);
  grunt.registerTask('deploy' , ["newer:compress:main", "aws_s3:deploy"]);
};
