(function() {

  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<a href='#' data-href='model.slug' data-class-active='model.active'>\n  <h2 data-text='model.title'></h2>\n  <p data-text='model.intro'></p>\n</a>");
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
