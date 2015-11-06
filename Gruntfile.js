var grunt = require('grunt');
var path = require('path');

grunt.initConfig({
  concat: {
    vendor: {
      src: [],
      dest: 'www/js/vendor.js'
    },
  },
  less: {
    dest: {
      options: {
        paths: ['stylesheets/less'],
        sourceMap: true,
        sourceMapBasepath: '.',
        sourceMapRootpath: '/',
        sourceMapURL: '/www/css/styles.css.map'
      },
      files: {
        'www/css/styles.css': 'stylesheets/less/styles.less'
      }  
    }
  },
  jade: {
    
  },
  watch: {
    less: {
      files: 'public/stylesheets/less/**/*.less',
      tasks: ['less:dest']
    },
    gss: {
      files: 'public/stylesheets/gss/**/*.gss',
      tasks: ['concat:gss']
    }
  },
  ts: {
    default: {
      tsconfig: {
        passThrough: true,
      }
    },
    
  }
})

grunt.loadNpmTasks('grunt-ts');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-less');
grunt.loadNpmTasks('grunt-contrib-jade');