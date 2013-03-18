(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/layout'], function(template) {
    return Blog.Layouts.Index = (function(_super) {

      __extends(Index, _super);

      function Index() {
        return Index.__super__.constructor.apply(this, arguments);
      }

      Index.prototype.template = template;

      Index.prototype.regions = {
        navigation: 'nav',
        article: 'article'
      };

      return Index;

    })(Backbone.Marionette.Layout);
  });

}).call(this);
