define ['templates/navigation', 'views/navigation_group'], (template) ->
  class Blog.Views.Navigation extends Backbone.Marionette.CompositeView
    itemView: Blog.Views.NavigationGroup
    template: template
    itemViewContainer: '.bb-items'
    
    itemViewOptions: =>
      collection: @model.get('articles')

    appendHtml: (collectionView, itemView, index) ->
      collectionView.$(@itemViewContainer).prepend(itemView.el)