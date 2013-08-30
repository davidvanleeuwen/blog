(function() {
  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<div class='bbm-modal__topbar'>\n  <h3 class='bbm-modal__title'>Hello</h3>\n</div>\n<div class='bbm-modal__section'>\n  <p>World!</p>\n</div>\n<div class='bbm-modal__bottombar'>\n  <a class='bbm-button' href='#'>Close</a>\n</div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
