define ['templates/layout'], (template) ->
  class Blog.Layouts.Index extends Backbone.Marionette.Layout
    template: template
    regions:
      navigation: 'nav'
      article: 'article'

    onRender: ->
      $(window).on('scroll', @scrollInArticle)

    onClose: ->
      $(window).off('scroll', @scrollInArticle)

    scrollInArticle: =>
      part = ($('body')[0].scrollHeight/100)*20
      if $('body').scrollTop() > part and !@hidden and $('body').scrollTop() > @lastScrollTop
        @hidden = true
        @$(@navigation.el).animate(left: '-24%', opacity: 0, {duration: 200})
      else if @hidden and $('body').scrollTop() < @lastScrollTop
        @hidden = false
        @$(@navigation.el).animate(left: '0', opacity: 1, {duration: 200})

      @lastScrollTop = $('body').scrollTop()