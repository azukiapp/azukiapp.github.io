systems({
  'azk-landpage': {

    depends: [],

    image: {'docker': 'azukiapp/ruby'},

    provision: [
      'bundle install --path /azk/bundler',
      'npm install',
      'bower --allow-root install',
      'grunt cleanCopy',
    ],

    workdir : '/azk/#{manifest.dir}',
    shell   : '/bin/bash',
    command : 'bundle exec jekyll serve -s ./src/ --config ./src/_config.yml --port=$HTTP_PORT --host=0.0.0.0 --watch --force_polling',
    wait    : {'retry': 20, 'timeout': 1000},

    mounts: {
      '/azk/bundler'                         : persistent('#{manifest.dir}/bundler'),
      '/azk/#{manifest.dir}'                 : path('.'),
      '/azk/#{manifest.dir}/_site'           : path('#{manifest.dir}/_site'),
      '/azk/#{manifest.dir}/bower_components': path('#{manifest.dir}/bower_components'),
      '/azk/#{manifest.dir}/node_modules'    : path('#{manifest.dir}/node_modules'),
      '/azk/#{manifest.dir}/build'           : path('#{manifest.dir}/build'),
      // '/azk/#{manifest.dir}'         : sync('.'),
      // '/azk/bundler'                 : persistent('#{manifest.dir}/bundler'),
      // '/azk/#{manifest.dir}/tmp'     : persistent('#{manifest.dir}/tmp'),
      // '/azk/#{manifest.dir}/log'     : path('#{manifest.dir}/log'),
      // '/azk/#{manifest.dir}/.bundle' : path('#{manifest.dir}/.bundle'),
    },

    scalable: {'default': 1},
    http: {
      domains: ['#{system.name}.#{azk.default_domain}']
    },
    ports: {
      http: '3000/tcp',
    },
    envs: {
      PATH              : './node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin',
      RUBY_ENV          : 'development',
      BUNDLE_APP_CONFIG : '/azk/bundler',
    },
  },
});
