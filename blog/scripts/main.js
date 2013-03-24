(function() {

  require.config({
    paths: {
      text: '../../src/lib/text',
      markdownConverter: '../../src/lib/Markdown.Converter',
      mdown: '../../src/lib/mdown',
      jquery: 'vendor/jquery-1.9.1',
      underscore: 'vendor/underscore-1.4.4',
      backbone: 'vendor/backbone-0.9.10',
      marionette: 'vendor/backbone.marionette-1.0.0rc6',
      modelbinder: 'vendor/backbone.modelbinder-0.1.6',
      relational: 'vendor/backbone.relational-0.8.0'
    },
    shim: {
      underscore: {
        exports: '_'
      },
      backbone: {
        deps: ['jquery', 'underscore'],
        exports: 'Backbone'
      },
      marionette: {
        deps: ['jquery', 'underscore', 'backbone'],
        exports: 'Marionette'
      },
      modelbinder: {
        exports: 'ModelBinder',
        deps: ['backbone']
      },
      relational: {
        exports: 'Backbone.Relational',
        deps: ['backbone']
      }
    }
  });

  require(['jquery', 'backbone', 'relational', 'modelbinder', 'blog', 'events/articles', 'routers/main', 'layouts/index', 'lib/gists', 'modelbinder'], function($, Backbone) {
    Blog.App.addInitializer(function(options) {
      return Backbone.history.start({
        pushState: true
      });
    });
    Blog.layout = new Blog.Layouts.Index();
    Blog.router = new Blog.Routers.Main();
    return $(function() {
      Blog.App.container.show(Blog.layout);
      return Blog.App.start();
    });
  });

}).call(this);
