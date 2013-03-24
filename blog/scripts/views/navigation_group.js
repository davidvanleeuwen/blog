(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/navigation_group', 'views/navigation_item'], function(template) {
    return Blog.Views.NavigationGroup = (function(_super) {

      __extends(NavigationGroup, _super);

      function NavigationGroup() {
        return NavigationGroup.__super__.constructor.apply(this, arguments);
      }

      NavigationGroup.prototype.itemView = Blog.Views.NavigationItem;

      NavigationGroup.prototype.template = template;

      NavigationGroup.prototype.itemViewContainer = '.bb-articles';

      NavigationGroup.prototype.events = {
        'click a': 'toggleGroup'
      };

      NavigationGroup.prototype.initialize = function() {};

      NavigationGroup.prototype.toggleGroup = function(e) {
        e.preventDefault();
        this.$('.arrow').toggleClass('up');
        return this.$('.bb-articles').toggle();
      };

      NavigationGroup.prototype.appendHtml = function(collectionView, itemView, index) {
        return collectionView.$(this.itemViewContainer).prepend(itemView.el);
      };

      return NavigationGroup;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);
