htmlDecode = (string) ->
  $('<div />').html(string).text()
