define [
  'fixtures/articles', 'models/chapter'
], (fixtures) ->
  class Blog.Collections.Chapters extends Backbone.Collection
    model: Blog.Models.Chapter

    findArticleBySlug: (slug) ->
      @find (chapter) ->
        _.any(chapter.get('articles').pluck('slug'), (item) -> item is slug)

    setInactive: ->
      @each (chapter) ->
        chapter.get('articles').each (item) -> item.set(active: false)
        
  new Blog.Collections.Chapters(fixtures)