(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/navigation_item'], function(template) {
    var _ref;
    return Blog.Views.NavigationItem = (function(_super) {
      __extends(NavigationItem, _super);

      function NavigationItem() {
        _ref = NavigationItem.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      NavigationItem.prototype.template = template;

      NavigationItem.prototype.bindings = {
        'h2': 'title',
        'p': 'intro',
        'a': {
          attributes: [
            {
              name: 'href',
              observe: 'slug',
              onGet: function(val) {
                return "/articles/" + val;
              }
            }, {
              name: 'class',
              observe: 'active',
              onGet: function(val) {
                if (val) {
                  return 'active';
                }
              }
            }
          ]
        }
      };

      NavigationItem.prototype.events = {
        'click a': 'goToArticle'
      };

      NavigationItem.prototype.onRender = function() {
        return this.stickit();
      };

      NavigationItem.prototype.goToArticle = function(e) {
        e.preventDefault();
        return Blog.App.vent.trigger('article', this.model.get('slug'));
      };

      return NavigationItem;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
