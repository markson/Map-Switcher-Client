var title = document.title;
var urlMatcher = 'bar';
var a = {
	foo:'foo'
};
var appleURL = "http://maps.apple.com/?lsp=9902&sll=-43.575285,172.762549&q=Sumner,%20New%20Zealand"; 
var parseURL = function(appleURL){
	var googleURL;
	var matcher = /-?\d+\.\d{6}/g;
	var matchResult = appleURL.match(matcher);
	googleURL = "comgooglemaps://?center=" + matchResult[0] +','+ matchResult[1] + "&zoom=14&views=traffic";
	return googleURL;
};
