System.config({
  "paths": {
    "*": "*.js",
    "app/*": "lib/*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js",
    "riotjs-countdown/*": "lib/*.js"
  }
});

System.config({
  "map": {
    "moment": "npm:moment@2.9.0",
    "riot": "/riot.min",
    "github:jspm/nodelibs-process@0.1.0": {
      "process": "npm:process@0.10.0"
    },
    "npm:moment@2.9.0": {
      "process": "github:jspm/nodelibs-process@0.1.0"
    }
  }
});

