define [
  'collections/chapters'
  'views/article'
  'views/navigation'
  'views/not_found'
], (chapters) ->

  Blog.App.vent.bind 'article', (slug) ->
    chapter   = chapters.findArticleBySlug(slug)
    chapter   = chapters.first() unless chapter

    chapters.setInactive()
    chapter.set(open: true)

    article   = chapter.get('articles').getArticle(slug)

    unless article
      Blog.App.vent.trigger('404')
      return

    Blog.router.navigate("/articles/#{slug}", {trigger: false}) if slug

    nav       = new Blog.Views.Navigation(model: chapter, collection: chapters)
    view      = new Blog.Views.Article(model: article)

    Blog.layout.navigation.show(nav)
    Blog.layout.article.show(view)


  Blog.App.vent.bind '404', ->
    nav       = new Blog.Views.Navigation(collection: chapters)
    view      = new Blog.Views.NotFound()

    Blog.layout.navigation.show(nav)
    Blog.layout.article.show(view)