getLocation = (json) ->
   htmlString = htmlDecode(json['HtmlBody'])
   nodes = $.parseHTML(htmlString)
   href = $('a', nodes).attr('href')
   re = /%20/g
   re2 = /%20C/g
   location = href.replace(re, ' ').replace(re2, ',')
