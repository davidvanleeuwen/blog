(function() {

  define(['mdown!articles/about-this-blog.md', 'mdown!articles/build-a-blog-using-grunt.md', 'mdown!articles/backbone.marionette.md'], function() {
    return [
      {
        title: 'Foreword',
        intro: '',
        slug: 'foreword',
        content: arguments[0]
      }, {
        title: 'Build a blog using grunt',
        intro: "This article is an introduction to Grunt and it's many plugins. Grunt is the base for all of your JavaScript projects.",
        slug: 'build-a-blog-using-grunt',
        content: arguments[1]
      }, {
        title: 'Backbone.Marionette',
        intro: "When you're looking to build an application with JavaScript, Backbone.Marionette is the right choice.",
        slug: 'backbone-marionette',
        content: arguments[2]
      }
    ];
  });

}).call(this);
