define ['templates/navigation_group', 'views/navigation_item'], (template) ->
  class Blog.Views.NavigationGroup extends Backbone.Marionette.CompositeView
    itemView: Blog.Views.NavigationItem
    template: template
    itemViewContainer: '.bb-articles'

    events:
      'click a': 'toggleGroup'

    bindings:
      'h3': 'title'
      '.arrow':
        observe: 'open'
        onGet: 'setOpen'

    initialize: ->
      @collection = @model.get('articles')

    onRender: ->
      @stickit()

    setOpen: (val) ->
      @$('.arrow').toggleClass('up', !val)
      @$('.bb-articles').toggle(val)
      return

    toggleGroup: (e) ->
      e.preventDefault()
      @model.set(open: !@model.get('open'))

    appendHtml: (collectionView, itemView, index) ->
      collectionView.$(@itemViewContainer).prepend(itemView.el)