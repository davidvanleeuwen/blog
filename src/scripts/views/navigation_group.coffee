define ['templates/navigation_group', 'views/navigation_item'], (template) ->
  class Blog.Views.NavigationGroup extends Backbone.Marionette.CompositeView
    itemView: Blog.Views.NavigationItem
    template: template
    itemViewContainer: '.bb-articles'

    initialize: ->

    onRender: ->

    appendHtml: (collectionView, itemView, index) ->
      collectionView.$(@itemViewContainer).prepend(itemView.el)