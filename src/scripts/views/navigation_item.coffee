define ['templates/navigation_item'], (template) ->
  class Blog.Views.NavigationItem extends Backbone.Marionette.ItemView
    template: template

    events:
      'click a': 'goToArticle'

    initialize: ->

    onRender: ->
      @$('h2').text(@model.get('title'))
      @$('p').text(@model.get('intro'))
      @$('a').attr('href', "/articles/#{@model.get('slug')}")

      if @model.get('active')
        @$('a').addClass('active')
      else
        @$('a').removeClass('active')

    goToArticle: (e) ->
      e.preventDefault()
      Blog.App.vent.trigger('article', @model.get('slug'))