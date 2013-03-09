(function() {

  require.config({
    paths: {
      jquery: 'vendor/jquery-1.9.1',
      underscore: 'vendor/underscore-1.4.4',
      backbone: 'vendor/backbone-0.9.10',
      marionette: 'vendor/backbone.marionette-1.0.0rc6',
      modelbinder: 'vendor/backbone.modelbinder-0.1.6',
      relational: 'vendor/backbone.relational-0.8.0',
      moment: 'vendor/moment-2.0.0'
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
      },
      moment: {
        exports: 'moment'
      }
    }
  });

  require(['jquery', 'backbone', 'modelbinder', 'relational', 'moment'], function($, Backbone) {
    return console.log('start');
  });

}).call(this);
