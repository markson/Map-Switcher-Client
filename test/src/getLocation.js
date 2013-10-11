var getLocation = function(json) {
	//var string = he.decode(json['HtmlBody'], {'isAttributeValue': true});
	var nodes = $.parseHTML(json['HtmlBody']);
	var result = $('a', nodes).attr('href');
	var re = /%20/g;
	var re2 = /%2C/g;
	var finalResult = result.replace(re, ' ').replace(re2, ',');
	//var finalResult = he.unescape(result);
	return finalResult;
}

var getName = function(json) {
	var nodes = $.parseHTML(json['HtmlBody']);
	var result = $('a', nodes).text();
	return result;
}
