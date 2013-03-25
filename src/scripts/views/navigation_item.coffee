define ['templates/navigation_item'], (template) ->
  class Blog.Views.NavigationItem extends Backbone.Marionette.ItemView
    template: template

    bindings:
      'h2': 'title'
      'p': 'intro'
      'a':
        attributes: [
          name: 'href'
          observe: 'slug'
          onGet: (val) -> "/articles/#{val}"
        ,
          name: 'class'
          observe: 'active'
          onGet: (val) -> 'active' if val
        ]

    events:
      'click a': 'goToArticle'

    onRender: ->
      @stickit()

    goToArticle: (e) ->
      e.preventDefault()
      Blog.App.vent.trigger('article', @model.get('slug'))