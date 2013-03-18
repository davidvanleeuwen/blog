define [
  'collections/articles'
  'views/article'
  'views/navigation'
  'views/not_found'
], (articles) ->

  Blog.App.vent.bind 'article', (slug) ->
    article = articles.getArticle(slug)

    unless article
      Blog.App.vent.trigger('404')
      return

    Blog.router.navigate("/articles/#{slug}", {trigger: false}) if slug

    nav     = new Blog.Views.Navigation(model: article, collection: articles)
    view    = new Blog.Views.Article(model: article)

    Blog.layout.navigation.show(nav)
    Blog.layout.article.show(view)


  Blog.App.vent.bind '404', ->
    nav     = new Blog.Views.Navigation(collection: articles)
    view    = new Blog.Views.NotFound()

    Blog.layout.navigation.show(nav)
    Blog.layout.article.show(view)
