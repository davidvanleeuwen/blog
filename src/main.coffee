require.config

  # AMD modules / plugins
  paths:
    text: '../../src/lib/text'
    markdownConverter: '../../src/lib/Markdown.Converter'
    mdown: '../../src/lib/mdown'

    jquery: 'vendor/jquery-1.9.1'
    underscore: 'vendor/underscore-1.4.4'
    backbone: 'vendor/backbone-0.9.10'
    marionette: 'vendor/backbone.marionette-1.0.0rc6'
    modelbinder: 'vendor/backbone.modelbinder-0.1.6'
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
    modelbinder:
      exports: 'ModelBinder'
      deps: ['backbone']
    relational:
      exports: 'Backbone.Relational'
      deps: ['backbone']

require [
  'jquery'
  'backbone'
  'mdown!articles/1.md'
  'mdown!articles/2.md'
  'lib/gists'
  'modelbinder'
  'relational'
], ($, Backbone, first, second) ->
  $ ->
    # Open up latest article
    $('article').html(second).gistify()
    analytics?.track("Looking at second article")
    articles = {first: first, second: second}

    # Simple navigation between articles
    $('nav a').on 'click', (e) ->
      e.preventDefault()
      $('nav a').removeClass('active')
      
      element = $(e.target).closest('a')
      element.addClass('active')

      analytics?.track("Looking at #{element.attr('data-article')} article")
      $('article').html(articles[element.attr('data-article')]).gistify()