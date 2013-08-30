(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['collections/articles', 'models/article'], function() {
    var _ref;
    return Blog.Models.Chapter = (function(_super) {
      __extends(Chapter, _super);

      function Chapter() {
        _ref = Chapter.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Chapter.prototype.relations = [
        {
          type: Backbone.HasMany,
          key: 'articles',
          relatedModel: 'Blog.Models.Article',
          collectionType: 'Blog.Collections.Articles'
        }
      ];

      return Chapter;

    })(Backbone.RelationalModel);
  });

}).call(this);
