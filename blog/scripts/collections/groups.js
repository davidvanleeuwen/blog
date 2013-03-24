(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['fixtures/articles', 'models/group'], function(fixtures) {
    Blog.Collections.Groups = (function(_super) {

      __extends(Groups, _super);

      function Groups() {
        return Groups.__super__.constructor.apply(this, arguments);
      }

      Groups.prototype.model = Blog.Models.Group;

      Groups.prototype.findArticleBySlug = function(slug) {
        return this.find(function(group) {
          return _.any(group.get('articles').pluck('slug'), function(item) {
            return item === slug;
          });
        });
      };

      return Groups;

    })(Backbone.Collection);
    return new Blog.Collections.Groups(fixtures);
  });

}).call(this);
