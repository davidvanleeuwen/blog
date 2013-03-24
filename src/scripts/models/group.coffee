define ['collections/articles', 'models/article'], ->
  class Blog.Models.Group extends Backbone.RelationalModel
    relations: [
      type: Backbone.HasMany
      key: 'articles'
      relatedModel: 'Blog.Models.Article'
      collectionType: 'Blog.Collections.Articles'
    ]