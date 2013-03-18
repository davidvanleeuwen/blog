define ['templates/layout'], (template) ->
  class Blog.Layouts.Index extends Backbone.Marionette.Layout
    template: template
    regions:
      navigation: 'nav'
      article: 'article'