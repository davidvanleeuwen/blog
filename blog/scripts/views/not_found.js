(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/not_found'], function(template) {
    var _ref;
    return Blog.Views.NotFound = (function(_super) {
      __extends(NotFound, _super);

      function NotFound() {
        _ref = NotFound.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NotFound.prototype.template = template;

      NotFound.prototype.events = {
        'click a': 'headBack'
      };

      NotFound.prototype.headBack = function(e) {
        e.preventDefault();
        return Blog.App.vent.trigger('article');
      };

      return NotFound;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
