<time>May 9, 2013</time> 

Creating the modal
--------

Woa! I didn't knew using Jasmine would help me unbore writing code. As frontend developer - not sure what that means though - I've always had the need to check the results on screen in a browser. After writing some lines of code, I always wanted to see things move or having something to click on. With Jasmine however I don't have that urge anymore.

This article is the second part of writing a Backbone extension. Why still bother you might ask. Shouldn't you be using Angular by now? I always believed that Backbone's power is it's community and the loads of [awesome extensions](/articles/useful-backbone-extensions) it has. Plus, we'll let this extension work with [Marionette](/articles/backbone-marionette) as well, which is a powerful framework I recommend using instead of Angular or any other framework. Backbone and Marionette are really robust and amazingly flexible, which is a perfect combination and that's what made me fell in love with it.

###Here we go###

Last time we discussed the functionality of the modal and wrote the spec. Instead of writing the actual code, I wanted to describe first what it should do. But everytime you write a test, you want it to pass. Let's take a look at what we've added so far:

<code data-gist="https://gist.github.com/5478075.json"></code>

We're using Jasmine's Spies here. Those things are pretty awesome. By using `spyOn` you can spy on an object and check which methods are being called. After creating an instance of the `modal`, you can spy on methods you call directly or internally. So when calling `view.render()` it should call `triggerView` internally. This test checks if this is true. So whenever we change the render method, this test will help us know if it's stil doing the thing it should be doing.

###Some other Jasmine goodness###

With Jasmine you can test every outcome and every method, but you can also define your own custom matchers. By calling `addMatchers` before each test you can create a expectation method, that you can re-use within the suite you're writing.

When creating larger applications, you're probably also have methods that run asynchronous. Jasmine provides two methods for this. By calling `waitFor` with a condition, it'll wait until it returns true. By writing your expectation within a `runs` block, it will run each function on after another.

These things are pretty staightforward and really useful, so if you'd like to know more: [check out the docs](http://pivotal.github.io/jasmine/).

###What do we have now###

After running through the spec, I've wrote the [initial code](https://github.com/davidvanleeuwen/backbone.modal/blob/master/src/backbone.modal.coffee) for the modal. There's no real usable result yet, because [@fverloop](https://twitter.com/fverloop) is working on the styling, to create beautiful modals like the Shipment modals.

This will be the code you'll need to setup a modal with two tabs for example:

<code data-gist="https://gist.github.com/5478570.json"></code>

It's a subclass of a Backbone.View, which you can pass a `template`. But to have a modal with several tabs, you will want to define multiple `views`. So if you add a view and pass it with a selector, it'll do the rest of the work. A template is optional, because you can just only use the views here. But when using a template, you'll have to define a `viewContainer`, which it uses to render the views in.

In the template you'll add the markup for the tabs, a close button and a submit button for example. These things will stay in the modal, whenever you switch between tabs. Everytime a selector is triggered, it will grab the view and render it in the viewContainer.

###Using Backbone.Modal with Marionette###

In the previous chapter we ran through Backbone.Marionette, an amazing framework to make your application even more awesome. You don't need to use every part of it, but can choose whatever you'd like - just like how Backbone does it. So let use `Marionette.Layout` to show a modal. It would be great to support stacked modals too, like Shipment does. By creating a custom `Marionette.Region`, we could stack a modal view everytime you call `show`. And we should add a convience method to close all the modals. Here you go:

<code data-gist="https://gist.github.com/5550062.json"></code>

For now it just adds each modal view you add to an array and everytime you call `close`, it closes the last modal in the stack. Pretty simple and straightforward, but the way to do stack modals with Marionette.

And this is how the example looks like now:

<code data-gist="https://gist.github.com/5550096.json"></code>

You can create a layout class, add a region with `regionType: Backbone.Marionette.Modals` and create a modal and add it to that region and do that again. Of course you shouldn't be adding the same modal view, but this is just to get the idea. Now you've got a stacked modal.

###Next time###

We're about to add the styling and do the animating stuff. When that's done it's really going to look amazing and work pretty solid. Next time we're going to talk about releasing Backbone.Modal in the wild and let you play with it.

Let me know what you think of this article: [@davidvanleeuwen](http://twitter.com/davidvanleeuwen)