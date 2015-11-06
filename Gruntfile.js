var grunt = require('grunt');
var path = require('path');

grunt.initConfig({
  
  concat: {
    /**
    * Concatenate 3-rd party libs
    */
    vendor: {
      src: [],
      dest: 'www/js/vendor.js'
    },
  },
  less: {
    /**
     * Complile development version of less styles
     */
    dev: {
      options: {
        paths: ['src/stylesheets/less'],
        sourceMap: true,
        sourceMapBasepath: '.',
        sourceMapRootpath: '/',
        sourceMapURL: '/www/css/styles.css.map'
      },
      files: {
        'www/css/styles.css': 'src/stylesheets/less/styles.less'
      }
    }
  },
  jade: {
    options: {
      pretty: true,
    },
    /**
     * Compile views
     */
    default: {
      files: [{
        expand: true,
        src: '**/*.jade',
        cwd: 'src/views/',
        dest: "www/",
        ext: '.html'
      }]
    }
  },
  watch: {
    less: {
      files: 'src/stylesheets/less/**/*.less',
      tasks: ['less:dest']
    },
    jade: {
      files: 'src/views/**/*.jade',
      tasks: ['jade']
    }
  },
  ts: {
    options: {
      compiler: './node_modules/typescript/bin/tsc'
    },
    default: {
      tsconfig: {
        passThrough: true,
      }
    },
    dev: {
      tsconfig: {
        passThrough: true,
      }
    }
  },
  concurrent: {
    dev: {
      logConcurrentOutput: true,
      tasks: ['watch:less', 'watch:jade', 'ts:dev'],
    },
  }
});

grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-concurrent');

/**
 * Build production version of application
 */
grunt.registerTask('build', []);

/**
 * Run development helpers
 */
grunt.registerTask('dev', ['concurrent:dev']);

/**
 * Deploys development environment
 */
grunt.registerTask('prepare', []);