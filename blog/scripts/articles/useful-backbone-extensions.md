<time>March 26, 2013</time> 

Useful Backbone extensions
--------

Backbone 1.0.0 was recently released. In this article we'll talk about why Backbone has become such a great platform. You probably already know Backbone and know why it's awesome, but the extensions make it even more spectacular. [See how this code works](https://github.com/davidvanleeuwen/blog).

### The awesomesauce ###

Backbone is a library and you can use it however you want. When you're working on more complex apps, you'll run into certain problems or want to give a user a better experience. 

Last week I talked about Marionette, which is an extensions that adds functionality so you can write your app faster/better. The past couple of months I've came across several extensions, which I think can make your life so much easier as a Backbone developer. That's why I've created a top 5.

In this article we'll use some of the extensions to improve this blog. We'll create chapters for future articles and add view bindings, so we'll be ready for all upcoming articles.

### 5. Paginator ###

We're not using the [Backbone.Paginator](https://github.com/addyosmani/backbone.paginator) for this blog, but it's really useful when creating an app that is in need of pagination. There are several paginator extensions out there, but this will get the job done in a simple matter.

It has two components, one meant for clientside pagination and one meant for pagination hooked up to your API. It extends from a `Backbone.Collection` and you can add your own options for serverside handling and UI handling. But you'll have to implement your own UI for pagination, which makes it more flexible - but requires some more coding on your end.

### 4. Validation ###

For most applications you'll need to do some validation. Not for this blog, but whenever you want to validate your form and do some UI work with it, you should definitely look at [Backbone.Validation](https://github.com/thedersen/backbone.validation). It's a simple and effective extension.

This extension is especially useful in combination with other extensions in this list.

<img src="/images/shipment_modal_validation.png" alt="Shipment Modal - Validation example" />

This happens when you forgot to enter a project name in [Shipment](http://shipmentapp.com).

### 3. Relational ###

Having nested data is pretty common in larger projects. If you have an array in your model or even a nested user object in a model, you'll want to use [Backbone.Relational](http://backbonerelational.org/).

There are two relation types, a `HasOne` and a `HasMany`, so you can use a nested model or a nested collection as a relation.

For future articles we'll want to group articles to get things organized. Let's create a chapter model with a `HasMany` relation so it can contain an articles collection.

<code data-gist="https://gist.github.com/5241820.json"></code>

It extends from a `Backbone.RelationalModel`. Within the `relations` array you can define all relations, but for our blog we'll only need the collection with articles for every chapter. I've also changed the fixtures to make this happen.

We'll need to change some other things too. Our article event needs to change, because it'll have to search through every chapter to find the article you are looking for:

<code data-gist="https://gist.github.com/5241905.json"></code>

Instead of searching through a simple collection, we'll need to create a method to search through every chapter. So on the top of our article event, will call `chapters.findArticleBySlug(slug)` and if it isn't found it will just grab the last one.

<code data-gist="https://gist.github.com/5241925.json"></code>

This returns the chapter that includes an article that has a slug that is similar as the parameter.

### 2. Stickit ###

Instead of manually setting your model attributes for every view and render it again for every change, you'll be probably better of using a view-binding extension. Luckily there are several out there.

 [Backbone.Modelbinder](https://github.com/theironcook/Backbone.ModelBinder) is to most basic one, which is pretty straightforward and simple to use. But if you want to do some more custom things it's becomes pretty cumbersome.

If you prefer the [AngularJS](http://angularjs.org/) approach, you can use [RivetJS](http://rivetsjs.com/). It works by declaring your bindings in the templates itself.

Although I'm used to Modelbinder, I think I'm going to use Stickit from now on. As Modelbinder, you can declare your bindings in the `Backbone.View` and not in your templates. Your templates should stay simple and clean. Take a look at the bindings for our [NavigationItem](https://github.com/davidvanleeuwen/blog/blob/master/src/scripts/views/navigation_item.coffee):

<code data-gist="https://gist.github.com/5241490.json"></code>

As [the site](http://nytimes.github.com/backbone.stickit/) says: you only need to define `view.bindings` and call `@stickit()`. The value in the hash is the selector, so you can grab the element you want to use from your template. The key is the attribute from your model, which is `@model` by default.

You can do all kinds of awesome things with Stickit. If you look at the anchor, you'll see that we're targeting two attributes. The `href` is used to set a slug but change it's output value. We're also setting the `class` attribute to active when it's true.


### 1. Memento ###

You might find that the previous extensions are pretty straightforward and also pretty common things that you can use for every app. You'll also find these things in other libraries/frameworks. With Backbone though, you'll have a choice and you can pick your own approach. You're app stays lean, Backbone only handles the essentials and you can find or create extensions that makes your app more complete.

So the #1 at this point is certainly [Backbone.Memento](https://github.com/derickbailey/backbone.memento). It's really useful for particular scenerio's and makes the difference for your app.

Memento is an extension that remembers the state of your models and you can create a snapshot of every moment and go back to it whenever you want. It's something that's unique and gives your app a real native feel.

It's not in this blog, but one scenario is: in Shipment you can open up a modal with your settings. You can edit your profile and it saves the model when you press done. You can also switch between views, but it'll only set the attributes if you do - so when you switch back to that view, it'll still have those changed values. But whenever you cancel it by pressing esc, it calls `memento.restore()`. Now it restores the model to the original state. Just the way you expect it to work.

### Next chapter ###

This chapter has covered the start of this blog using several techniques using JavaScript. It's still an experiment, but I've received some great feedback and we'll be improving it on a weekly basis.

The next chapter will cover a new project, which will be an extension to Backbone. It will start small, but with every article we'll figure out how to create an open source project.

Stay tuned and if you have any feedback or suggestions. Tweet to [@davidvanleeuwen](https://twitter.com/davidvanleeuwen)

