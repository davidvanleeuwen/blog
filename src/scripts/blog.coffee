define ['marionette'], (Marionette) ->

  class Blog
    constructor: (@options = {}) ->
      # Exposed objects under this class.
      @Routers      = {}
      @Views        = {}
      @Collections  = {}
      @Models       = {}
      @Layouts      = {}
      @App          = new Backbone.Marionette.Application()
    
  # To have it globally accessible
  window.Blog = new Blog()

  window.Blog.App.addRegions
    container: 'body'