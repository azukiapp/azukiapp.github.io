/**
 * Documentation: http://docs.azk.io/Azkfile.js
 */

// Adds the systems that shape your system
systems({
  'azk-landpage': {
    // Dependent systems
    depends: [],
    // More images:  http://images.azk.io
    image: "dockerfile/nodejs",
    // Steps to execute before running instances
    provision: [
      "npm install",
    ],
    command: "node index.js",
    workdir: "/azk/#{manifest.dir}",
    // Mounts folders to assigned paths
    mounts: {
      "/azk/#{manifest.dir}": ".",
    },
    http: {
      hostname: "azk.io.#{azk.default_domain}",
    },
    envs: {
      PATH: "/azk/#{manifest.dir}/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
});


