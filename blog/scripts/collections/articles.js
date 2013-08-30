(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['models/article'], function() {
    var _ref;
    return Blog.Collections.Articles = (function(_super) {
      __extends(Articles, _super);

      function Articles() {
        _ref = Articles.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Articles.prototype.model = Blog.Models.Article;

      Articles.prototype.getArticle = function(slug) {
        var article;
        article = this.find(function(item) {
          return item.get('slug') === slug;
        });
        if (!slug) {
          article = this.last();
        }
        if (article) {
          article.set({
            active: true
          });
        }
        return article;
      };

      return Articles;

    })(Backbone.Collection);
  });

}).call(this);
