(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/layout'], function(template) {
    var _this = this;
    return Blog.Layouts.Index = (function(_super) {

      __extends(Index, _super);

      function Index() {
        var _this = this;
        this.scrollInArticle = function() {
          return Index.prototype.scrollInArticle.apply(_this, arguments);
        };
        return Index.__super__.constructor.apply(this, arguments);
      }

      Index.prototype.template = template;

      Index.prototype.regions = {
        navigation: 'nav',
        article: 'article'
      };

      Index.prototype.onRender = function() {
        return $(window).on('scroll', this.scrollInArticle);
      };

      Index.prototype.onClose = function() {
        return $(window).off('scroll', this.scrollInArticle);
      };

      Index.prototype.scrollInArticle = function() {
        var part;
        part = ($('body')[0].scrollHeight / 100) * 20;
        if ($('body').scrollTop() > part && !this.hidden) {
          this.hidden = true;
          return this.$(this.navigation.el).animate({
            left: '-24%',
            opacity: 0
          }, {
            duration: 200
          });
        } else if ($('body').scrollTop() < part && this.hidden) {
          this.hidden = false;
          return this.$(this.navigation.el).animate({
            left: '0',
            opacity: 1
          }, {
            duration: 200
          });
        }
      };

      return Index;

    })(Backbone.Marionette.Layout);
  });

}).call(this);
