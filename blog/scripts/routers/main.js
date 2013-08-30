(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    var _ref;
    return Blog.Routers.Main = (function(_super) {
      __extends(Main, _super);

      function Main() {
        _ref = Main.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Main.prototype.routes = {
        '': 'article',
        'articles/:slug': 'article',
        '*path': 'notFound'
      };

      Main.prototype.article = function(slug) {
        return Blog.App.vent.trigger('article', slug);
      };

      Main.prototype.notFound = function() {
        return Blog.App.vent.trigger('404');
      };

      return Main;

    })(Backbone.Marionette.AppRouter);
  });

}).call(this);
