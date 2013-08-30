define ['jquery'], ($) ->
  class DomAppEventTrigger
    constructor: (@app) ->
      $(document).on('click', '[data-event]', @triggerAppEvent)

    triggerAppEvent: (e) =>
      e.preventDefault()

      args = @triggeredEvent(e)
      @app.vent.trigger.apply(@app.vent, args)

    triggeredEvent: (e) =>
      $target = $(e.target).closest('[data-event]')
      array   = $target.data()
      array   = _.without(array, array.icon)

      return array