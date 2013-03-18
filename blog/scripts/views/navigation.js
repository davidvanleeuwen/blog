(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/navigation', 'views/navigation_item'], function(template) {
    return Blog.Views.Navigation = (function(_super) {

      __extends(Navigation, _super);

      function Navigation() {
        return Navigation.__super__.constructor.apply(this, arguments);
      }

      Navigation.prototype.itemView = Blog.Views.NavigationItem;

      Navigation.prototype.template = template;

      Navigation.prototype.itemViewContainer = '.bb-items';

      Navigation.prototype.initialize = function() {};

      Navigation.prototype.appendHtml = function(collectionView, itemView, index) {
        return collectionView.$(this.itemViewContainer).prepend(itemView.el);
      };

      return Navigation;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);
