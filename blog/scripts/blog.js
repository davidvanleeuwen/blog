(function() {

  define(['marionette'], function(Marionette) {
    var Blog;
    Blog = (function() {

      function Blog(options) {
        this.options = options != null ? options : {};
        this.Routers = {};
        this.Views = {};
        this.Collections = {};
        this.Models = {};
        this.Layouts = {};
        this.App = new Backbone.Marionette.Application();
      }

      return Blog;

    })();
    window.Blog = new Blog();
    return window.Blog.App.addRegions({
      container: 'body'
    });
  });

}).call(this);
