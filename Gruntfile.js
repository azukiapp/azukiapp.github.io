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
        params: {
          CacheControl: 'max-age=86400000, public',
          Expires: (new Date(Date.now() + 86400000)) // 2 days
        },
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
          { expand: false , src: ['index.html'] , dest: './build/index.html' },
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
    },

    uglify: {
      javascripts: {
        files: {
          'js/min/all-uglified.min.js': [
            'js/jquery.js',
            'js/jquery.easing.1.3.js',
            'js/jquery.scrollTo.min.js',
            'js/jquery.themepunch.revolution.min.js',
            'js/html5shiv.js',
            'js/bootstrap.min.js',
            'js/custom.js',
          ]
        }
      },

      prismJs: {
        files: {
          'js/min/prism-uglified.min.js': [
            'js/prism.js',
            'js/prism_azkfile.js',
          ]
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'css/all-uglified.min.css': [
            'css/bootstrap.css',
            'css/font-awesome.css',
            'css/settings.css',
            'css/colors.css',
            'css/style.css',
            'css/prism.css',
            'css/responsive.css',
          ]
        }
      }
    },

    htmlmin: {
      dist: {
        options: {
          removeComments: true,
          collapseWhitespace: true
        },
        files: {
          'index-min.html': 'index.html',
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
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ["browserSync", "watch"]);
  grunt.registerTask('assets',  ["imagemin"]);
  grunt.registerTask('uglifier',["uglify", "cssmin", "htmlmin"]);
  grunt.registerTask('compile', ["uglifier", "clean:build", "newer:compress:main"]);
  grunt.registerTask('deploy' , ["newer:compress:main", "aws_s3:deploy"]);
};
