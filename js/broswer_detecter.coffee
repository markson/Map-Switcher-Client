# iDevices = ['iPad', 'iPhone', 'iPod']
# 
# iOS = false
# if navigator.platform in iDevices
#   iOS = true
iDevices = [/iPad/, /iPhone/, /iPod/]

iOS = false

for v in iDevices
  if navigator.userAgent.match(v)
    iOS = true
$(document).ready ->
    unless iOS
      $('body').append("<p class='warning'>You are not running on iDevices<p>")



