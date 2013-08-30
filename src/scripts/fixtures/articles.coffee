define [
  'mdown!articles/about-this-blog.md'
  'mdown!articles/build-a-blog-using-grunt.md'
  'mdown!articles/backbone.marionette.md'
  'mdown!articles/useful-backbone-extensions.md'
  'mdown!articles/getting-started.md'
  'mdown!articles/creating-the-modal.md'
  'mdown!articles/backbone.modal-release.md'
], ->
  [
    title: 'Backbone Modal'
    open: true
    articles: [
      title: 'Getting started'
      intro: 'This is an introduction in creating our own Backbone extension and starts with Jasmine.'
      slug: 'getting-started'
      content: arguments[4]
    ,
      title: 'Creating the modal'
      intro: "This is part two of creating a Backbone extension using Jasmine. We'll also use Marionette's power here."
      slug: 'creating-the-modal'
      content: arguments[5]
    ,
      title: 'Backbone.Modal release'
      intro: "Check out the first release of Backbone.Modal. We'll go through most of it's features."
      slug: 'backbone.modal-release'
      content: arguments[6]
    ]
  ,
    title: 'Building this blog'
    open: false
    articles: [
      title: 'Foreword'
      intro: ''
      slug: 'foreword'
      content: arguments[0]
    ,
      title: 'Build a blog using grunt'
      intro: "This article is an introduction to Grunt and it's many plugins. Grunt is the base for all of your JavaScript projects."
      slug: 'build-a-blog-using-grunt'
      content: arguments[1]
    ,
      title: 'Backbone.Marionette'
      intro: "When you're looking to build an application with JavaScript, Backbone.Marionette is the right choice."
      slug: 'backbone-marionette'
      content: arguments[2]
    ,
      title: 'Useful Backbone extensions'
      intro: "Backbone 1.0.0 was recently released. In this article we'll talk about why Backbone has become such a great platform."
      slug: 'useful-backbone-extensions'
      content: arguments[3]
    ]
  ]
  