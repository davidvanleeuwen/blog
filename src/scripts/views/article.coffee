define ['templates/article'], (template) ->
  class Blog.Views.Article extends Backbone.Marionette.ItemView
    template: template

    onRender: ->
      @$el.html @model.get('content')
      @$el.gistify()

    onShow: ->
      # Go to top when article is shown
      $('body').scrollTop(0)
      analytics?.track(@model.get('title'))