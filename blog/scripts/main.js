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

  require(['jquery', 'backbone', 'mdown!articles/1.md', 'lib/gists', 'modelbinder', 'relational'], function($, Backbone, article) {
    return $(function() {
      $('article').on('click', function(e) {
        if ($('nav').hasClass('zen')) {
          return $('nav').css({
            height: '100%'
          }).animate({
            opacity: 1,
            duration: 500
          }).removeClass('zen');
        } else {
          return $('nav').animate({
            opacity: 0,
            duration: 500
          }).delay(500).animate({
            height: 0,
            duration: 500
          }).addClass('zen');
        }
      });
      return $('article').html(article).gistify();
    });
  });

}).call(this);
