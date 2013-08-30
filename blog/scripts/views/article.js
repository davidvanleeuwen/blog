(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/article'], function(template) {
    var _ref;
    return Blog.Views.Article = (function(_super) {
      __extends(Article, _super);

      function Article() {
        _ref = Article.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Article.prototype.template = template;

      Article.prototype.bindings = {
        ':el': {
          observe: 'content',
          updateMethod: 'html'
        }
      };

      Article.prototype.onRender = function() {
        this.stickit();
        return this.$el.gistify();
      };

      Article.prototype.onShow = function() {
        $('body').scrollTop(0);
        return typeof analytics !== "undefined" && analytics !== null ? analytics.track(this.model.get('title')) : void 0;
      };

      return Article;

    })(Backbone.Marionette.ItemView);
  });

}).call(this);
