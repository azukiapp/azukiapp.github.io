/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'azk-landpage': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "kisenka/centos6-jekyll",
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    command: "jekyll serve -s ./src/ --port=$HTTP_PORT --watch --force_polling",
    workdir: "/azk/#{manifest.dir}",
    // Mounts folders to assigned paths
    mounts: {
      "/azk/#{manifest.dir}": ".",
    },
    http: {
      domains: [ "#{system.name}.#{azk.default_domain}" ]
    },
    ports: {
      http: "4000/tcp",
    },
    envs: {
      PATH: "/azk/#{manifest.dir}/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
});


