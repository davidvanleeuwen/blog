<time>August 31, 2013</time> 

Backbone.Modal release
--------

Yay, it's finally done. We just launched the <a href="http://awkward.github.io/backbone.modal/">first version of Backbone.Modal</a>. It took a while, but it's pretty amazing. We made sure it's flexible enough by testing and implementing it in several of our projects. And I can say, it works like a charm.

In this article we're going to talk about how you can actually use Backbone.Modal. In the previous articles we discussed how we could build such a plugin. So let's put that into practice and add a modal to this blog.

<img src="/images/modals.png" alt="Backbone.Modal" width="100%" />

Do check out the <a href="http://awkward.github.io/backbone.modal/">docs</a> we've created for you. There are some examples on there and you can try them out on the site itself.

### Your first modal

Thanks to <a href="https://twitter.com/fverloop">Floris</a>, we added some cool animations and styles. We don't need to go through all the trouble to add a default style and start playing with it. To get everything up and running, just add `backbone.modal-min.js`, `backbone.modal.css` and `backbone.modal.theme.css` to your site.

Make sure you have all the required dependencies on your site: jQuery, underscore.js and backbone.js ofcourse.

If you want to use the default style, like the backdrop, the modal itself, the button and title, you'll need to include some elements that start with `bbm-`. This is in HAML:

<code data-gist="https://gist.github.com/6394432.json"></code>

Then we create the Backbone.Modal view, which inherits from a plain Backbone.View. This means you can do whatever you would do normally with your view, but this adds some sugar, to create a simple modal:

<code data-gist="https://gist.github.com/6394442.json"></code>

Yep, in CoffeeScript and uses RequireJS too, because that's what we're using for this blog - but you can use whatever you'd prefer. So far, so good. Nothing fancy really, just a simple modal that pops up: <a href="#" data-event="modal">show me the result</a>.

### The cool things

In the <a href="/articles/getting-started">first article</a> of this chapter I added a clip that show a few example modals from: Stripe, Shipment and Karma. If you look at Stripe's account modal, it has 9 tabs and every view has a button that opens another small modal on top. You can do something similar with Backbone.Modal, without writing a lot of code. Check out this <a href="https://github.com/awkward/backbone.modal/blob/master/examples/2_tab_based.html">example on Github</a>.

There are some more examples, one of this is creating a stacked modal. We have also discussed Marionette, which is an awesome framework made by <a href="https://twitter.com/derickbailey">Derick Bailey</a>. When you're using it too, you can create stacked modals by adding a region type in your Marionette.Layout.

Here's what the layout for this blog looks like:

<code data-gist="https://gist.github.com/6394633.json"></code>

Now whenever you call `layout.show(modal)` multiple times, it will open every modal on top of the other: <a href="#" data-event="modals">let's try it out</a>.

### What now?

I would love to hear your feedback. And absolutely let me know if you've added this to any of your projects. Contact me: <a href="https://twitter.com/davidvanleeuwen">@davidvanleeuwen</a>.

The next time we'll do something completely different. I think it's time to take this blog to the next level.

PS: I also released a site in the meantime, which is a list of all Backbone plugins: <a href="http://backplug.io">backplug.io</a>.