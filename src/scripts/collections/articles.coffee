define ['models/article'], ->
  class Blog.Collections.Articles extends Backbone.Collection
    model: Blog.Models.Article

    getArticle: (slug) ->
      article = @find (item) -> item.get('slug') is slug
      article = @last() unless slug
      article.set(active: true) if article
      return article