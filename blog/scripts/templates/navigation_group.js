(function() {

  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<header>\n  <h3>Building this blog</h3>\n</header>\n<div class='bb-articles'></div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
