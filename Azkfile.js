/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'azk-landpage': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: 'kisenka/centos6-jekyll',
    // Steps to execute before running instances
    provision: [
      'npm install',
      'bundle install --path /azk/bundler',
    ],
    command: 'bundle exec jekyll serve -s ./src/ --port=$HTTP_PORT --watch --force_polling',
    workdir: '/azk/#{manifest.dir}',
    // Mounts folders to assigned paths
    mounts: {
      '/azk/#{manifest.dir}'             : '.',
      '/azk/#{manifest.dir}/_site'       : persistent('_site'),
      '/azk/#{manifest.dir}/node_modules': persistent('node_modules'),
      '/azk/bundler'                     : persistent('bundler'),
    },
    http: {
      domains: [ '#{system.name}.#{azk.default_domain}' ]
    },
    ports: {
      http: '4000/tcp',
    },
    envs: {
      RUBY_ENV : 'development',
      PATH: '/azk/#{manifest.dir}/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    }
  },
});


