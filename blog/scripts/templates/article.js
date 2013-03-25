(function() {

  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<div data-html='model.content'></div>");
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
