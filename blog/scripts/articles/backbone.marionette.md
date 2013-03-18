<time>March 18, 2013</time> 

Backbone.Marionette
--------

When you're looking to build an application with JavaScript, Backbone.Marionette is the right choice. In this article, I'll get into Marionette - and change this blog into a application for real world use.

### Hello Backbone and Marionette ###

Backbone is awesome. It's the engine that runs a lot of great apps like [Flow](http://www.getflow.com/), [FourSquare](https://foursquare.com/) and [Stripe](https://stripe.com/). Backbone, like the site says: is a library. That's because it's really flexible and you can use it however and whatever you'd like.

It has a [MV*-whatever](http://lostechies.com/derickbailey/2011/12/23/backbone-js-is-not-an-mvc-framework/) structure, so you do more, while writing less. The founding father, Jeremy Ashkenas, is also the guy behind CoffeeScript. I believe it has a really strong community and because of it's flexibility and community the best 'library' out there to build JavaScript applications at this point.

But to use all of it's functionality, it requires a fair amount of boilerplate code. So that's where Marionette comes in.

### So what are we up to ###

To be honest, Marionette also requires some boilerplate code. But it will eventually let you write less code. In this article I want to make this blog more functional, so you can navigate between articles. It should be more dynamic, so the next time I want to add an article, I don't want to change any HTML.

Sounds pretty easy doesn't it?

### Let's do it ###

<code data-gist="https://gist.github.com/5178354.json"></code>

This is the Blog class, which will be our general container class for all objects. We have a list of our own objects we want to expose, creating an instance of a Marionette Application and we're adding a region.

So if you haven't used Backbone before, you'll probably will have to deal with a lot of new stuff here. I advice you to first take a look at the [Backbone site](http://documentcloud.github.com/backbone/) and then head over the [Marionette site](https://github.com/marionettejs/backbone.marionette#marionettes-pieces) to see all it's extensions.

It adds a few different types of views: [Marionette.ItemView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.itemview.md), [Marionnete.CollectionView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.collectionview.md), the combination of those two [Marionette.CompositeView](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.compositeview.md) and [Marionette.Layout](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.layout.md).

You should always start out with a layout. This is because you can define [regions](https://github.com/marionettejs/backbone.marionette/blob/master/docs/marionette.region.md) within a layout, to manage nested views. You can use `layout.show(view)` for rendering the view in a region and it will make sure it closes views that where already in that region. For every view you'll have the `onRender`, `onShow` and `onClose` methods to do any other work that's needed for your view. Let's create a layout for our blog:

<code data-gist="https://gist.github.com/5178609.json"></code>

I started out creating an `Article` view, which extends from ItemView and a `Navigation` view, which extends from CompositeView and a `NavigationItem` view, which also extends from ItemView. Those are all the views we need for now.

### It's event-driven, so what? ###

When I was only using Backbone, I used to write a lot of logic in my routers - which isn't that nice and makes your code really cluttered. Then I saw [Backbone.Geppetto](https://github.com/ModelN/backbone.geppetto), another framework, which implements more of an event-driven architecture. I thought that my routers should look more like routers in Rails. So when I saw Marionette - I definitely found the solution.

With your own events, you can create a really scalable, robust system. And your routers stay clean. [Backbone.Wreqr](https://github.com/marionettejs/backbone.wreqr) is an event aggregator that makes this happen within Backbone.Marionette.

<code data-gist="https://gist.github.com/5179205.json"></code>

When we trigger the event `article` it will figure out which model to use and what views to render. And the best thing is that I can call that event wherever and whenever I want. So when I call it without a slug, it will just render the latest article. If it has a slug and it doesn't find it in the collection, it will trigger the `404` event, which is also located in this file for now.

When we call `show`, it will automatically render that view and take care of memory management. Isn't that just awesome?

### But where did all the articles go? ###

For this blog, we don't really need an backend right now. Let's just stick with fixtures for the articles and get those markdown files in there as models. We have a collection `articles` and a model `article`. That's it. To use the data, I've imported them right back into the `articles.coffee` event file - so we can manage those articles from there.

The navigation isn't a static thing anymore, but it builds up depending on your articles. We're using a CompositeView right now and the nice thing is, that it uses collections to create 'list' type views. Also, the difference between a CompositeView and a CollectionView is that a CompositeView accepts a template, while a CollectionView will be just a list (with a tagName ul for example). The header is also in the same view at the moment.

<code data-gist="https://gist.github.com/5181909.json"></code>

The articles in the fixtures are in chronological order. But for the navigation we want the latest article on top. The `appendHtml` is a method which is inherited from CollectionView. It will automatically keep track of all views and use this method for placing the views. So instead of appending it to the `itemViewContainer`, a selector to define where to place those itemViews, those views will be prepended. 

### Pro's and cons ###

Using Backbone for your apps is ofcourse a big improvement, but there're still a lot of downsides to it. Things like good SEO isn't really there yet, that's why it's recommended to use for apps and not your marketing site. With Marionette, you'll get a more robust system - so less boilerplate code is needed. Using Marionette will improve the flexibility, which will make your app more easy to build and scale at the same time.

When you're choosing Backbone for your app, you should definitely take a look at Marionette and hopefully this article explains some bits of the logic behind it.

### What's next ###

This article has improved this blog a lot. But I think it still can use some useful features. Maybe comments or a different system so you can give feedback. But I think that dynamic data will be a big part of my next article. So I'll get into some Backbone extensions/plugins that are useful to get things done.

Please let me know if you have any questions or suggestions, so we can improve this blog by sending me a tweet [@davidvanleeuwen](http://twitter.com/davidvanleeuwen).
