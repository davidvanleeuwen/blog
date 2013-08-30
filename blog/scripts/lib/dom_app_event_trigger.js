(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  define(['jquery'], function($) {
    var DomAppEventTrigger;
    return DomAppEventTrigger = (function() {
      function DomAppEventTrigger(app) {
        this.app = app;
        this.triggeredEvent = __bind(this.triggeredEvent, this);
        this.triggerAppEvent = __bind(this.triggerAppEvent, this);
        $(document).on('click', '[data-event]', this.triggerAppEvent);
      }

      DomAppEventTrigger.prototype.triggerAppEvent = function(e) {
        var args;
        e.preventDefault();
        args = this.triggeredEvent(e);
        return this.app.vent.trigger.apply(this.app.vent, args);
      };

      DomAppEventTrigger.prototype.triggeredEvent = function(e) {
        var $target, array;
        $target = $(e.target).closest('[data-event]');
        array = $target.data();
        array = _.without(array, array.icon);
        return array;
      };

      return DomAppEventTrigger;

    })();
  });

}).call(this);
