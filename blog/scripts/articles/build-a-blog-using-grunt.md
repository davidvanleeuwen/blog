<time>March 12, 2013</time> 

Build a blog using Grunt
--------

This article is an introduction to Grunt and it's many plugins. Grunt is the base for all of your JavaScript projects. This article is a reference to the [code on github](https://github.com/davidvanleeuwen/blog).

### So what are we building ###

Simple: this blog with articles written in Markdown, but the development environment should be painless. So we want to include things like [LiveReload](http://livereload.com/), [RequireJS](http://requirejs.org) and things like CoffeeScript, Haml and Sass. 

In the end, it should compile to this simple static blog. So that's where Grunt comes in.

### Okay, ready? ###

Alright, let's get started. Head over [my Github](https://github.com/davidvanleeuwen/blog) and clone the thing and run your own blog.

If you're completely new to Grunt, please take a look at their [official website](http://gruntjs.com/). They did a great job explaining things. 

I've found all the useful plugins, so if you go to the folder and run the following:

<code data-gist="https://gist.github.com/5128696.json"></code>

This will install all the needed Grunt plugins. All plugins that we're using are listed in our `package.json` file. 

Before you continue, make sure you're running the latest Grunt-cli, by doing:

<code data-gist="https://gist.github.com/5128754.json"></code>

That's it.

### Step by step ###

Grunt is an amazing tool to build your JavaScript applications more efficient. You can run tasks in your command line to run other scripts and tools that you're familiar with. 

To get Grunt in your project, the only thing you'll have to do is create a file called `Gruntfile.coffee`. So first we'll get Haml, Sass and Coffeescript in there, because those are my preferred languages to make this happen.

<code data-gist="https://gist.github.com/5129146.json"></code>

The `module.exports = (grunt) ->` is a wrapper function for Grunt itself. You can load NPM ([Node Packages](https://npmjs.org/)) tasks in your project and these are specifically for Grunt. 


### Compile all the things ###

<code data-gist="https://gist.github.com/5129286.json"></code>

It looks complicated, but it's more of a repetition. The important thing here is to understand your project structure. We have a `src/` folder and a `blog/` folder. The `src/` folder contains all Haml, Sass and CoffeeScript files. And it compiles everything to the `blog/` folder.

Every task you load is predefined, because we're using the npm tasks. But within those tasks you can define your own sub tasks. In the predifined cofee task, we have a `scripts` and `main` task. The [coffeescript plugin](https://github.com/gruntjs/grunt-contrib-coffee) and the other plugins requires to define a files object that you want to compile and you can pass some optional options.

By adding our files from `src/`, it will compile this to the `blog/` folder. But it uses the location of the `Gruntfile.coffee` as a reference. So you'll get weird folder names in your `blog/` folder. So we'll need to rename the output file names of all compiled files.  

The `grunt.file.expandMapping` is a convenience method, so you can to run through every file and rename it.

You can find every plugin and the correspondending info on the [Grunt Plugin page](http://gruntjs.com/plugins). Everything with `contrib-` is maintained by Grunt, so others can be outdated or unmaintained repo's.

### Get your tasks running ###

To let this thing do it's work, you can call every task individually. But you can also define your own tasks and combine the compilation tasks by doing the following:

<code data-gist="https://gist.github.com/5129495.json"></code>

Now you can call `grunt build` from your terminal in the project folder and it will compile everything. 

### Livereload ###

We don't want to hit build everytime you make a change - that's why I love LiveReload.

So for LiveReload we can use the [grunt-contrib-livereload](https://github.com/gruntjs/grunt-contrib-livereload) plugin. It has more dependencies to make it work. For one, it need to run on a server and it needs a watcher to see changes we make to our files. 


Check out the tasks that are needed on [Github](https://github.com/davidvanleeuwen/blog/blob/master/Gruntfile.coffee#L82). So the result of this task would look like this:

<code data-gist="https://gist.github.com/5129548.json"></code>

It will run the tasks in that order. It'll first run connect (the server), build it, starting the livereload server, let it open my browser and go directly to the blog and setup the watcher to wait for any changes.

So when we run `grunt watch`, it will start a process and it will do all the work.

Awesome!

### Markdown with RequireJS ###

So this is our last step. It can look pretty scary at first, but RequireJS is a great tool for JavaScript developers.

If you're not familiar with RequireJS, you might know other things like Sprockets (for Rails) or an equivalent dependency manager/module loader. It's not just to make your code look fancy, but the main advantage is that you decide the order when files load. Instead of using `01_` as prefix for your files for example, you can neatly define the order of the files, without having to think if the file is loaded on the page.

But it's not just for JavaScript. It can load Markdown as well, because just like Grunt, it can run external plugins. By using the [mdown plugin](https://github.com/millermedeiros/requirejs-plugins), we can include Markdown files in our code. So let's take a look at the Gruntfile now:

<code data-gist="https://gist.github.com/5129664.json"></code>

There are a lot of things happening here. It also has a similar config as Grunt itself, which you can find in [src/main.coffee](https://github.com/davidvanleeuwen/blog/blob/master/src/main.coffee).

RequireJS is nice for a development environment, but in production we just want to have one small sized file. So I've also created a deploy variant, using AlmondJS. This is a drop-in-replacement for RequireJS. 

RequireJS uglifies the file for me, which it does as optimization. It also doesn't include the RequireJS plugins (mdown), so it stays small and only uses the output. Note that I'm running the RequireJS subtasks for this (`requirejs:deploy`). Now when you hit `grunt deploy`, you'll end up with just one JavaScript file - and that's the blog.

### What's next ###

The next article will dive into Backbone and especially [Backbone.Marionette](http://marionettejs.com/). We want to navigate between articles, have nice URL's and seperate views for our posts - but it also needs to be event-driven.

If you have suggestions, would like to contribute or have any other ideas just let me know. Let's create a place where everything will have to do with creating Single Page Apps, using JavaScript.

So let me know what you think and tweet about this article [@davidvanleeuwen](http://twitter.com/davidvanleeuwen).