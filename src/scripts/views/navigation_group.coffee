define ['templates/navigation_group', 'views/navigation_item'], (template) ->
  class Blog.Views.NavigationGroup extends Backbone.Marionette.CompositeView
    itemView: Blog.Views.NavigationItem
    template: template
    itemViewContainer: '.bb-articles'

    events:
      'click a': 'toggleGroup'

    bindings:
      'h3': 'title'

    onRender: ->
      @stickit()

    toggleGroup: (e) ->
      e.preventDefault()
      @$('.arrow').toggleClass('up')
      @$('.bb-articles').toggle()

    appendHtml: (collectionView, itemView, index) ->
      collectionView.$(@itemViewContainer).prepend(itemView.el)