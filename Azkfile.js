systems({
  'azk-landpage': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: 'dynaum/ruby-bundler-node',
    // Steps to execute before running instances
    provision: [
      'bundle install --path /azk/bundler',
      'npm install'
    ],
    workdir : '/azk/#{manifest.dir}',
    command : 'bundle exec jekyll serve -s ./src/ --config ./src/_config.yml --port=$HTTP_PORT --watch --force_polling',
    shell   : '/bin/bash',
    // not expect application response
    scalable: {'default': 1},
    // Mounts folders to assigned paths
    mounts: {
      '/azk/#{manifest.dir}': path('.'),
      '/azk/bundler'        : persistent('bundler'),
    },
    http: {
      domains: ['#{system.name}.#{azk.default_domain}']
    },
    envs: {
      // set instances variables
      RUBY_ENV : 'development',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    },
  },
});
