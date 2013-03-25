define ['collections/articles', 'models/article'], ->
  class Blog.Models.Chapter extends Backbone.RelationalModel
    relations: [
      type: Backbone.HasMany
      key: 'articles'
      relatedModel: 'Blog.Models.Article'
      collectionType: 'Blog.Collections.Articles'
    ]