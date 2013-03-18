define ['templates/not_found'], (template) ->
  class Blog.Views.NotFound extends Backbone.Marionette.ItemView
    template: template

    events:
      'click a': 'headBack'

    headBack: (e) ->
      e.preventDefault()
      Blog.App.vent.trigger('article')