define [
  'fixtures/articles', 'models/chapter'
], (fixtures) ->
  class Blog.Collections.Chapters extends Backbone.Collection
    model: Blog.Models.Chapter

    findArticleBySlug: (slug) ->
      @find (chapter) ->
        _.any(chapter.get('articles').pluck('slug'), (item) -> item is slug)

  new Blog.Collections.Chapters(fixtures)