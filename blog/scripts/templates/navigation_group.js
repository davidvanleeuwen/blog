(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<header>\n  <a class='group' href='#'>\n    <div class='arrow'></div>\n    <h3></h3>\n  </a>\n</header>\n<div class='bb-articles'></div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
