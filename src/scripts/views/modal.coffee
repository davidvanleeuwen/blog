define ['templates/modal'], (template) ->
  class Blog.Views.Modal extends Backbone.Modal
    template: template
    cancelEl: ".bbm-button"

    initialize: (@options = {}) ->

    onRender: ->
    	@$('p').html(@options.content) if @options.content