(function() {

  define(function() {
    return function(context) {
      var render;
      render = function() {
        var $o;
        $o = [];
        $o.push("<header>\n  <h1>David van Leeuwen</h1>\n  <p>JavaScript developer, <a href=\"http://madeawkward.com\">Awkward</a> co-founder and working on <a href=\"http://shipmentapp.com\">Shipment</a></p>\n</header>\n<div class='bb-items'></div>");
        return $o.join("\n").replace(/\s(?:id|class)=(['"])(\1)/mg, "");
      };
      return render.call(context);
    };
  });

}).call(this);
