module.exports = (grunt) ->
  fs = require('fs')

  grunt.initConfig
    open:
      default:
        url: 'http://localhost:8000'

    connect:
      default:
        options:
          base: './blog'
          middleware: (connect, options) ->
            [connect.static(options.base), (req, res, next) ->
              fs.readFile "#{options.base}/index.html", (err, data) ->
                res.writeHead(200)
                res.end(data)
            ]

    coffee:
      scripts:
        files: 
          grunt.file.expandMapping(['src/scripts/**/*.coffee'], 'blog/scripts/', 
            rename: (destBase, destPath) ->
              return destBase + destPath.slice(12, destPath.length).replace(/\.coffee$/, '.js')
          )
      main:
        files:
          'blog/scripts/main.js': 'src/main.coffee'

    sass:
      options:
        compass: true
        style: 'compressed'
      compile:
        files:
          'blog/stylesheets/main.css': 'src/stylesheets/main.sass'

    haml:
      templates:
        options:
          language: 'coffee'
          target: 'js'
        files:
          grunt.file.expandMapping(['src/templates/**/*.haml'], 'blog/scripts/templates/',
            rename: (destBase, destPath) ->
              return destBase + destPath.slice(14, destPath.length).replace(/\.haml$/, '.js')
          )
      index:
        compile:
          options:
            target: 'html'
        files:
          'blog/index.html': 'src/index.haml'

    concurrent:
      compile: ['coffee', 'sass', 'haml']

    requirejs:
      compile:
        options:
          name: "main"
          baseUrl: "./blog/scripts/"
          mainConfigFile: "./blog/scripts/main.js"
          optimize: "none"
          out: "./blog/scripts/blog.js"

      deploy:
        options:
          baseUrl: "./blog/scripts/"
          name: "vendor/almond"
          include: ['main']
          insertRequire: ['main']
          mainConfigFile: "./blog/scripts/main.js"
          optimize: "uglify"
          out: "./blog/scripts/blog.js"
          stubModules: ['text', 'mdown']

    # clean: ["blog/"]

    # Todo: add Jasmine

    regarde:
      livereloadCSS:
        files: ['blog/stylesheets/main.css']
        tasks: ['livereload:main.css']
        # events: true
      livereloadJS:
        files: ['blog/**/*.js']
        tasks: ['livereload']
        # events: true
      sass:
        files: ['src/stylesheets/**/*.sass']
        tasks: ['sass']
      coffee:
        files: ['src/**/*.coffee', 'blog/scripts/articles/*.md']
        tasks: ['coffee', 'requirejs:compile']
      haml:
        files: ['src/**/*.haml']
        tasks: ['haml', 'requirejs:compile']

  grunt.loadNpmTasks 'grunt-contrib-connect'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-sass'
  grunt.loadNpmTasks 'grunt-regarde'
  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-open'
  grunt.loadNpmTasks 'grunt-contrib-livereload'
  grunt.loadNpmTasks 'grunt-contrib-requirejs'
  grunt.loadNpmTasks 'grunt-contrib-clean'
  grunt.loadNpmTasks 'grunt-concurrent'

  grunt.registerTask 'build', ['concurrent', 'requirejs:compile']
  grunt.registerTask 'watch', ['connect', 'build', 'livereload-start', 'open', 'regarde']
  grunt.registerTask 'deploy', ['coffee', 'sass', 'haml', 'requirejs:deploy']