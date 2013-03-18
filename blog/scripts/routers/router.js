(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    return Blog.Routers.Main = (function(_super) {

      __extends(Main, _super);

      function Main() {
        return Main.__super__.constructor.apply(this, arguments);
      }

      Main.prototype.routes = {
        '': 'article'
      };

      Main.prototype.initialize = function() {};

      Main.prototype.article = function(slug) {
        return Blog.vent.trigger('article', article);
      };

      return Main;

    })(Backbone.Marionette.AppRouter);
  });

}).call(this);
