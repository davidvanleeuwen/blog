define ['templates/navigation_item'], (template) ->
  class Blog.Views.NavigationItem extends Backbone.Marionette.ItemView
    template: template

    events:
      'click a': 'goToArticle'

    goToArticle: (e) ->
      e.preventDefault()
      Blog.App.vent.trigger('article', @model.get('slug'))