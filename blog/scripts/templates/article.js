(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        return $o.join("\n");
      };
      return render.call(context);
    };
  });

}).call(this);
