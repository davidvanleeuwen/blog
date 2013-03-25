require.config
  waitSeconds: 45

  pragmasOnSave:
    excludeMdown: true
  
  # AMD modules / plugins
  paths:
    text: '../../src/lib/text'
    mdown: '../../src/lib/mdown'
    markdownConverter: '../../src/lib/Markdown.Converter'
    jquery: 'vendor/jquery-1.9.1'
    underscore: 'vendor/underscore-1.4.4'
    backbone: 'vendor/backbone-0.9.10'
    marionette: 'vendor/backbone.marionette-1.0.0rc6'
    stickit: 'vendor/backbone.stickit-0.6.3'
    relational: 'vendor/backbone.relational-0.8.0'

  # Shim modules
  shim:
    underscore:
      exports: '_'
    backbone:
      deps: ['jquery', 'underscore']
      exports: 'Backbone'
    marionette:
      deps: ['jquery', 'underscore', 'backbone']
      exports: 'Marionette'
    stickit:
      exports: 'Stickit'
      deps: ['backbone']
    relational:
      exports: 'Backbone.Relational'
      deps: ['backbone']

require [
  'jquery'
  'backbone'
  'relational'
  'stickit'
  'blog'

  'events/articles'
  'routers/main'
  'layouts/index'

  'lib/gists'
], ($, Backbone) ->
  Blog.App.addInitializer (options) ->
    Backbone.history.start(pushState: true)
    
  Blog.layout   = new Blog.Layouts.Index()
  Blog.router   = new Blog.Routers.Main()

  $ ->
    Blog.App.container.show(Blog.layout)
    Blog.App.start()