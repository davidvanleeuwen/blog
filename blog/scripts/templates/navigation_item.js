(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<a href='#'>\n  <h2></h2>\n  <p></p>\n</a>");
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
