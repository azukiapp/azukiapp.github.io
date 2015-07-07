'use strict';

module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({

    copy: {
      main: {
        files: [
          //CSS
          {
            src: ['bower_components/bootstrap/dist/css/bootstrap.css'],
            dest: 'src/_assets/css/bootstrap.css'
          },
          {
            src: ['bower_components/fontawesome/css/font-awesome.css'],
            dest: 'src/_assets/css/font-awesome.css'
          },
          {
            src: ['bower_components/fontawesome/css/font-awesome.css'],
            dest: 'src/_assets/css/font-awesome.css'
          },
          {
            src: ['bower_components/prism/themes/prism-okaidia.css'],
            dest: 'src/_assets/css/prism-okaidia.css'
          },

          //JS
          {
            src: ['bower_components/jquery/dist/jquery.js'],
            dest: 'src/_assets/js/jquery.js'
          },
          {
            src: ['bower_components/bootstrap/dist/js/bootstrap.js'],
            dest: 'src/_assets/js/bootstrap.js'
          },
          {
            src: ['bower_components/html5shiv/dist/html5shiv.js'],
            dest: 'src/_assets/js/html5shiv.js'
          },
          {
            src: ['bower_components/jquery.easing/js/jquery.easing.js'],
            dest: 'src/_assets/js/jquery.easing.js'
          },
          {
            src: ['bower_components/jquery.scrollTo/jquery.scrollTo.js'],
            dest: 'src/_assets/js/jquery.scrollTo.js'
          },
          {
            src: ['bower_components/prism/prism.js'],
            dest: 'src/_assets/js/prism.js'
          },
        ],
      },
    },

    aws: {
      'accessKeyId' : process.env.AWS_ACCESS_KEY_ID,
      'secretKey'   : process.env.AWS_SECRET_KEY,
      'bucket'      : process.env.AWS_PACKAGE_BUCKET,
    },

    aws_s3: {
      options: {
        accessKeyId         : '<%= aws.accessKeyId %>',
        secretAccessKey     : '<%= aws.secretKey %>',
        region              : 'sa-east-1',
        uploadConcurrency   : 5,
        downloadConcurrency : 5,
        bucket              : '<%= aws.bucket %>',
        access              : 'public-read'
      },

      deployIndex: {
        options: {
          gzip: true,
          differential: true,
          params: {
            ContentEncoding: 'gzip'
          }
        },
        files: [
          {
            expand: true,
            cwd: './build/_site',
            src: ['index.html'],
          }
        ],
      },

      deployAssets: {
        options: {
          gzip: true,
          differential: true,
          params: {
            ContentEncoding: 'gzip',
            CacheControl: 'max-age=630720000, public',
            Expires: (new Date(Date.now() + 63072000000)) // 2 years
          }
        },
        files: [
          {
            expand: true,
            cwd: './build/_site',
            src: ['assets/**/*'],
          },
        ],
      },

      deleteAll:  {
        dest: '/',
        'action': 'delete'
      }
    },

    compress: {
      main: {
        options: {mode: 'gzip'},
        files: [
          {expand: false , src: ['./_site/index.html'] , dest: './build/_site/index.html'},
          {expand: true ,
            src: [
              './_site/assets/**/*',
            ] ,
            dest: './build'
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
      site : [
        '_site',
      ],
      build : [
        'build/*',
      ],
      minified : [
        'src/_assets/js/all.min.js',
        'src/_assets/js/prism.min.js',
        'src/_assets/css/all.min.css',
      ],
    },

    uglify: {
      javascripts: {
        files: {
          'src/_assets/js/all.min.js': [
            'src/_assets/js/jquery.js',
            'src/_assets/js/jquery.easing.js',
            'src/_assets/js/jquery.scrollTo.js',
            'src/_assets/js/jquery.themepunch.revolution.min.js',
            'src/_assets/js/html5shiv.js',
            'src/_assets/js/bootstrap.js',
            'src/_assets/js/core.js',
            'src/_assets/js/custom.js',
          ]
        }
      },

      prismJs: {
        files: {
          'src/_assets/js/prism.min.js': [
            'src/_assets/js/prism.js',
            'src/_assets/js/prism-okaidia.js',
            'src/_assets/js/prism_azkfile.js',
          ]
        }
      }
    },

    cssmin: {
      combine: {
        files: {
          'src/_assets/css/all.min.css': [
            'src/_assets/css/bootstrap.css',
            'src/_assets/css/font-awesome.css',
            'src/_assets/css/settings.css',
            'src/_assets/css/colors.css',
            'src/_assets/css/style.css',
            // 'src/_assets/css/prism.css',
            'src/_assets/css/prism-okaidia.css',
            'src/_assets/css/prism-line-numbers.css',
            'src/_assets/css/responsive.css',
          ]
        }
      }
    },

    // htmlmin: {
    //   dist: {
    //     options: {
    //       removeComments: true,
    //       collapseWhitespace: true
    //     },
    //     files: {
    //       'index-min.html': 'index.html',
    //     }
    //   },
    // },

    shell: {
      options: {
        stderr: false
      },
      target: {
        command: 'bundle exec jekyll build -s ./src/ --config ./src/_config_production.yml'
      }
    },

  });

  grunt.registerTask('uglifier',
   [
    'clean:site',
    'clean:minified',
    'uglify:javascripts',
    'uglify:prismJs',
    'cssmin:combine',
    'shell'
   ]);

  grunt.registerTask('compile',
   [
    'uglifier',
    'newer:compress:main'
   ]);

  grunt.registerTask('deploy',
   [
    'copy',
    'compile',
    'aws_s3:deployIndex',
    'aws_s3:deployAssets'
   ]);

  grunt.registerTask('cleanCopy',
   [
    'clean:site',
    'copy',
   ]);
};
