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
    workdir: "/azk/<%= manifest.dir %>",
    // Mounts folders to assigned paths
    mount_folders: {
      ".": "/azk/<%= manifest.dir %>",
    },
    envs: {
      PATH: "/azk/<%= manifest.dir %>/node_modules/.bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
});


