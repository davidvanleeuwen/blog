define ['marionette', 'lib/dom_app_event_trigger'], (Marionette, DomAppEventTrigger) ->

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

  new DomAppEventTrigger(window.Blog.App)

  window.Blog.App.addRegions
    container: 'body'