(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(function() {
    return Blog.Models.Article = (function(_super) {

      __extends(Article, _super);

      function Article() {
        return Article.__super__.constructor.apply(this, arguments);
      }

      return Article;

    })(Backbone.Model);
  });

}).call(this);
