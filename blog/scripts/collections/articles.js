(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['fixtures/articles', 'models/article'], function(fixtures) {
    Blog.Collections.Articles = (function(_super) {

      __extends(Articles, _super);

      function Articles() {
        return Articles.__super__.constructor.apply(this, arguments);
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
        this.each(function(item) {
          return item.set({
            active: false
          });
        });
        if (article) {
          article.set({
            active: true
          });
        }
        return article;
      };

      return Articles;

    })(Backbone.Collection);
    return new Blog.Collections.Articles(fixtures);
  });

}).call(this);
