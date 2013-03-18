define [
  'fixtures/articles'
  'models/article'
], (fixtures) ->
  class Blog.Collections.Articles extends Backbone.Collection
    model: Blog.Models.Article

    getArticle: (slug) ->
      article = @find (item) -> item.get('slug') is slug
      article = @last() unless slug

      @each (item) -> item.set(active: false)
      article.set(active: true) if article
      return article

  new Blog.Collections.Articles(fixtures)