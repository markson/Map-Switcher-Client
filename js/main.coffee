host = "localhost:4567"
#host = "markson.me:4567"

getLocation = (json) ->
   htmlString = htmlDecode(json['HtmlBody'])
   nodes = $.parseHTML(htmlString)
   href = $('a', nodes).attr('href')
   re = /%20/g
   re2 = /%2C/g
   location = href.replace(re, ' ').replace(re2, ',')
htmlDecode = (string) ->
  $('<div />').html(string).text()

$('#getJSON').click ->
  $.get("http://#{host}/json", (data)->
    location = getLocation(data)
    googleLocation = parseURL(location)
    # console.log(googleLocation)
    # console.log(data)
    $link = $('<a />').attr('href', googleLocation).text("From: #{data['From']} On #{data['Date']}")
    $('#link').append($link)
  )
