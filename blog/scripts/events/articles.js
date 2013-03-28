(function() {

  define(['collections/chapters', 'views/article', 'views/navigation', 'views/not_found'], function(chapters) {
    Blog.App.vent.bind('article', function(slug) {
      var article, chapter, nav, view;
      chapter = chapters.findArticleBySlug(slug);
      if (!chapter) {
        chapter = chapters.first();
      }
      chapters.setInactive();
      chapter.set({
        open: true
      });
      article = chapter.get('articles').getArticle(slug);
      if (!article) {
        Blog.App.vent.trigger('404');
        return;
      }
      if (slug) {
        Blog.router.navigate("/articles/" + slug, {
          trigger: false
        });
      }
      nav = new Blog.Views.Navigation({
        model: chapter,
        collection: chapters
      });
      view = new Blog.Views.Article({
        model: article
      });
      Blog.layout.navigation.show(nav);
      return Blog.layout.article.show(view);
    });
    return Blog.App.vent.bind('404', function() {
      var nav, view;
      nav = new Blog.Views.Navigation({
        collection: chapters
      });
      view = new Blog.Views.NotFound();
      Blog.layout.navigation.show(nav);
      return Blog.layout.article.show(view);
    });
  });

}).call(this);
