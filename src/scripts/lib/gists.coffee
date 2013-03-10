define ->
  $.fn.gistify = ->
    @find('code[data-gist]').each ->
      $.ajax
        url: $(@).data('gist')
        dataType: 'jsonp'
        success: (response) =>
          $(@).html(response.div)