(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/navigation_group', 'views/navigation_item'], function(template) {
    var _ref;
    return Blog.Views.NavigationGroup = (function(_super) {
      __extends(NavigationGroup, _super);

      function NavigationGroup() {
        _ref = NavigationGroup.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavigationGroup.prototype.itemView = Blog.Views.NavigationItem;

      NavigationGroup.prototype.template = template;

      NavigationGroup.prototype.itemViewContainer = '.bb-articles';

      NavigationGroup.prototype.events = {
        'click a': 'toggleGroup'
      };

      NavigationGroup.prototype.bindings = {
        'h3': 'title',
        '.arrow': {
          observe: 'open',
          onGet: 'setOpen'
        }
      };

      NavigationGroup.prototype.initialize = function() {
        return this.collection = this.model.get('articles');
      };

      NavigationGroup.prototype.onRender = function() {
        return this.stickit();
      };

      NavigationGroup.prototype.setOpen = function(val) {
        this.$('.arrow').toggleClass('up', !val);
        this.$('.bb-articles').toggle(val);
      };

      NavigationGroup.prototype.toggleGroup = function(e) {
        e.preventDefault();
        return this.model.set({
          open: !this.model.get('open')
        });
      };

      NavigationGroup.prototype.appendHtml = function(collectionView, itemView, index) {
        return collectionView.$(this.itemViewContainer).prepend(itemView.el);
      };

      return NavigationGroup;

    })(Backbone.Marionette.CompositeView);
  });

}).call(this);
