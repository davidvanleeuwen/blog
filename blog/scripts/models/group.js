(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['collections/articles', 'models/article'], function() {
    return Blog.Models.Group = (function(_super) {

      __extends(Group, _super);

      function Group() {
        return Group.__super__.constructor.apply(this, arguments);
      }

      Group.prototype.relations = [
        {
          type: Backbone.HasMany,
          key: 'articles',
          relatedModel: 'Blog.Models.Article',
          collectionType: 'Blog.Collections.Articles'
        }
      ];

      return Group;

    })(Backbone.RelationalModel);
  });

}).call(this);
