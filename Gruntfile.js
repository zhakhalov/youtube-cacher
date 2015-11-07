var grunt = require('grunt');
var path = require('path');

grunt.initConfig({
  //-----------------------------------------------------------------------------------------------
  //                                                                                           copy
  //-----------------------------------------------------------------------------------------------
  copy: {
    src: {
      files: [{
        expand: true, 
        src: ['src/app/**'], 
        dest: 'www/'
      }]
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                         concat
  //-----------------------------------------------------------------------------------------------
  concat: {
    /**
    * Concatenate 3-rd party libs
    */
    vendor: {
      src: [],
      dest: 'www/js/vendor.js'
    },
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                           sass
  //-----------------------------------------------------------------------------------------------
  sass: {
    dev: {
      options: {
        sourcemap: true
      },
      files: {
        'www/css/ionic.app.css': 'src/stylesheets/scss/ionic.app.scss'
      }
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                           less
  //-----------------------------------------------------------------------------------------------
  less: {
    dist: {
     
    },
    /**
     * Complile development version of less styles
     */
    dev: {
      options: {
        paths: ['src/stylesheets/less'],
        sourceMap: true,
        sourceMapBasepath: '.',
        sourceMapRootpath: '/',
        sourceMapURL: '/css/styles.css.map'
      },
      files: {
        'www/css/styles.css': 'src/stylesheets/less/styles.less'
      }
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                           jade
  //-----------------------------------------------------------------------------------------------
  jade: {
    /**
     * Compile pretty printed views
     */
    dist: {
     
    },
    dev: {
      options: {
        pretty: true,
      },
      files: [{
        expand: true,
        src: '**/*.jade',
        cwd: 'src/views/',
        dest: "www/",
        ext: '.html'
      }]
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                             ts
  //-----------------------------------------------------------------------------------------------
  ts: {
    options: {
      compiler: './node_modules/typescript/bin/tsc'
    },
    dist: {
     
    },
    dev: {
      tsconfig: {
        passThrough: true,
      }
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                          watch
  //-----------------------------------------------------------------------------------------------
  watch: {
    less: {
      files: 'src/stylesheets/less/**/*.less',
      tasks: ['less:dev']
    },
    jade: {
      files: 'src/views/**/*.jade',
      tasks: ['jade:dev']
    },
    src: {
      files: 'src/app/**/*.ts',
      tasks: ['copy:src', 'ts:dev']
    }
  },
  //-----------------------------------------------------------------------------------------------
  //                                                                                      concurent
  //-----------------------------------------------------------------------------------------------
  concurrent: {
    dev: {
      logConcurrentOutput: true,
      tasks: ['watch:less', 'watch:jade', 'watch:src'],
    },
  }
});

grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-jade');
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-copy');
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