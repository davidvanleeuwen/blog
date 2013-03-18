(function() {

  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<nav></nav>\n<div class='github'>\n  <a href='https://github.com/davidvanleeuwen/blog'>\n    <img alt='Fork me on GitHub' src='https://s3.amazonaws.com/github/ribbons/forkme_right_gray_6d6d6d.png'>\n  </a>\n</div>\n<article></article>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
