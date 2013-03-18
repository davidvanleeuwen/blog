define ['templates/navigation', 'views/navigation_item'], (template) ->
  class Blog.Views.Navigation extends Backbone.Marionette.CompositeView
    itemView: Blog.Views.NavigationItem
    template: template
    itemViewContainer: '.bb-items'
    
    initialize: ->

    appendHtml: (collectionView, itemView, index) ->
      collectionView.$(@itemViewContainer).prepend(itemView.el)