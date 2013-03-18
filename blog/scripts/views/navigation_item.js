(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/navigation_item'], function(template) {
    return Blog.Views.NavigationItem = (function(_super) {

      __extends(NavigationItem, _super);

      function NavigationItem() {
        return NavigationItem.__super__.constructor.apply(this, arguments);
      }

      NavigationItem.prototype.template = template;

      NavigationItem.prototype.events = {
        'click a': 'goToArticle'
      };

      NavigationItem.prototype.initialize = function() {};

      NavigationItem.prototype.onRender = function() {
        this.$('h2').text(this.model.get('title'));
        this.$('p').text(this.model.get('intro'));
        this.$('a').attr('href', "/articles/" + (this.model.get('slug')));
        if (this.model.get('active')) {
          return this.$('a').addClass('active');
        } else {
          return this.$('a').removeClass('active');
        }
      };

      NavigationItem.prototype.goToArticle = function(e) {
        e.preventDefault();
        return Blog.App.vent.trigger('article', this.model.get('slug'));
      };

      return NavigationItem;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
