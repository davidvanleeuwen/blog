(function() {
  var __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  define(['templates/modal'], function(template) {
    var _ref;
    return Blog.Views.Modal = (function(_super) {
      __extends(Modal, _super);

      function Modal() {
        _ref = Modal.__super__.constructor.apply(this, arguments);
        return _ref;
      }

      Modal.prototype.template = template;

      Modal.prototype.cancelEl = ".bbm-button";

      Modal.prototype.initialize = function(options) {
        this.options = options != null ? options : {};
      };

      Modal.prototype.onRender = function() {
        if (this.options.content) {
          return this.$('p').html(this.options.content);
        }
      };

      return Modal;

    })(Backbone.Modal);
  });

}).call(this);
