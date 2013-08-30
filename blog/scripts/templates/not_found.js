(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<h2>Not found</h2>\n<p>\n  <a href='#'>Head back to the last article </a>\n</p>");
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
