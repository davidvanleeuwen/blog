(function() {
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/layout'], function(template) {
    var _ref;
    return Blog.Layouts.Index = (function(_super) {
      __extends(Index, _super);

      function Index() {
        this.scrollInArticle = __bind(this.scrollInArticle, this);
        _ref = Index.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Index.prototype.template = template;

      Index.prototype.regions = {
        navigation: 'nav',
        article: 'article',
        modal: {
          selector: '.modal',
          regionType: Backbone.Marionette.Modals
        }
      };

      Index.prototype.onRender = function() {
        return $(window).on('scroll', this.scrollInArticle);
      };

      Index.prototype.onClose = function() {
        return $(window).off('scroll', this.scrollInArticle);
      };

      Index.prototype.scrollInArticle = function() {
        var part;
        part = ($('body')[0].scrollHeight / 100) * 20;
        if ($('body').scrollTop() > part && !this.hidden && $('body').scrollTop() > this.lastScrollTop) {
          this.hidden = true;
          this.$(this.navigation.el).animate({
            left: '-24%',
            opacity: 0
          }, {
            duration: 200
          });
        } else if (this.hidden && $('body').scrollTop() < this.lastScrollTop) {
          this.hidden = false;
          this.$(this.navigation.el).animate({
            left: '0',
            opacity: 1
          }, {
            duration: 200
          });
        }
        return this.lastScrollTop = $('body').scrollTop();
      };

      return Index;

    })(Backbone.Marionette.Layout);
  });

}).call(this);
