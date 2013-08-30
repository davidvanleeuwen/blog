(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['fixtures/articles', 'models/chapter'], function(fixtures) {
    var _ref;
    Blog.Collections.Chapters = (function(_super) {
      __extends(Chapters, _super);

      function Chapters() {
        _ref = Chapters.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Chapters.prototype.model = Blog.Models.Chapter;

      Chapters.prototype.findArticleBySlug = function(slug) {
        return this.find(function(chapter) {
          return _.any(chapter.get('articles').pluck('slug'), function(item) {
            return item === slug;
          });
        });
      };

      Chapters.prototype.setInactive = function() {
        return this.each(function(chapter) {
          return chapter.get('articles').each(function(item) {
            return item.set({
              active: false
            });
          });
        });
      };

      return Chapters;

    })(Backbone.Collection);
    return new Blog.Collections.Chapters(fixtures);
  });

}).call(this);
