define [
  'fixtures/articles', 'models/group'
], (fixtures) ->
  class Blog.Collections.Groups extends Backbone.Collection
    model: Blog.Models.Group

    findArticleBySlug: (slug) ->
      @find (group) ->
        _.any(group.get('articles').pluck('slug'), (item) -> item is slug)

  new Blog.Collections.Groups(fixtures)