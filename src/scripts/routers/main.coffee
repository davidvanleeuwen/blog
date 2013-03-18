define ->
  class Blog.Routers.Main extends Backbone.Marionette.AppRouter
    routes:
      '':                 'article'
      'articles/:slug':   'article'
      '*path':            'notFound'

    article: (slug) ->
      Blog.App.vent.trigger('article', slug)

    notFound: ->
      Blog.App.vent.trigger('404')