(function() {
  define(function() {
    return function(context) {
      var render;

      render = function() {
        var $o;

        $o = [];
        $o.push("<header>\n  <h1>David van Leeuwen</h1>\n  <p>JavaScript developer, <a href=\"http://madeawkward.com\">Awkward</a> co-founder and working on <a href=\"http://shipmentapp.com\">Shipment</a></p>\n  <a class='ss-icon' href='https://github.com/davidvanleeuwen'>&#xF671;</a>\n  <a class='ss-icon' href='https://twitter.com/davidvanleeuwen'>&#xF611;</a>\n  <a class='ss-icon' href='skype:david.sonic?userinfo'>&#xF6A0;</a>\n</header>\n<div class='bb-items'></div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
