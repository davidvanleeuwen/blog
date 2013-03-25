(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['fixtures/articles', 'models/chapter'], function(fixtures) {
    Blog.Collections.Chapters = (function(_super) {

      __extends(Chapters, _super);

      function Chapters() {
        return Chapters.__super__.constructor.apply(this, arguments);
      }

      Chapters.prototype.model = Blog.Models.Chapter;

      Chapters.prototype.findArticleBySlug = function(slug) {
        return this.find(function(chapter) {
          return _.any(chapter.get('articles').pluck('slug'), function(item) {
            return item === slug;
          });
        });
      };

      return Chapters;

    })(Backbone.Collection);
    return new Blog.Collections.Chapters(fixtures);
  });

}).call(this);
