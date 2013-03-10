(function() {

  define(function() {
    return $('code[data-gist]').each(function() {
      return console.log(this);
    });
  });

}).call(this);
