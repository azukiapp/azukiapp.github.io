/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

systems({
  'azk-landpage': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: { docker: 'dynaum/ruby-bundler-node' },
    // Steps to execute before running instances
    provision: [
      'bundle install --path /azk/bundler',
      'npm install',
      'bower --allow-root install',
      'grunt cleanCopy',
    ],
    workdir : '/azk/#{manifest.dir}',
    command : 'bundle exec jekyll serve -s ./src/ --config ./src/_config.yml --port=$HTTP_PORT --watch --force_polling',
    shell   : '/bin/bash',
    // not expect application response
    scalable: {'default': 1},
    // Mounts folders to assigned paths
    mounts: {
      '/azk/bundler'                         : persistent('bundler'),
      '/azk/#{manifest.dir}'                 : path('.'),
      '/azk/#{manifest.dir}/_site'           : path('_site'),
      '/azk/#{manifest.dir}/bower_components': path('bower_components'),
      '/azk/#{manifest.dir}/node_modules'    : path('node_modules'),
      '/azk/#{manifest.dir}/build'           : path('build'),
    },
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    envs: {
      // set instances variables
      PATH     : './node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      RUBY_ENV : 'development',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    },
  },
});
