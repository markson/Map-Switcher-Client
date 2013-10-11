var parseJSON = function(input) {
	return input['TextBody'];
}

var getQueryWords = function(url) {
	var re = /&q=.*/
	var re2 = /&q=/
	var words = url.match(re)[0].replace(re2, '');
	return words;
}
