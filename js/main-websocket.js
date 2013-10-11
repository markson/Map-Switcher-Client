
$('#feed button').click(function(){
	window.location = "http://localhost?id=" + this.id;
});


$('#signal').click(function(e){
	// $.ajax({
	// 	url: "http://localhost:9292/api/test",
	// 	data: {request: 'node'},
	// 	success: warningBannerShow,
	// 	dataType: "html"
	// });
	
	$.get('http://localhost/api/maplinks', generateLink, "json");
	generateWarning();
});

$('#mock-websocket').click(function(){
	var socket = {
		appleURL:"http://maps.apple.com/?lsp=9902&sll=-43.575285,172.762549&q=Sumner,%20New%20Zealand",
		submit_at:'2013-08-09T01:47:56+12:00'
	};
	var googleURL = parseURL(socket['appleURL']);
	appendLink(socket);
});

$('#send-mocked-mail').click(function(){
	sendMockedMail();
});
/* */
var generateLink = function(data) {
	var  elements = data['maplinks'].length;
	for(var i = 0; i < elements; i++) {
		var google_link = parseURL(data['maplinks'][i].apple_url);
		var link = $('<a>').attr('href', google_link).text(data['maplinks'][i].submit_at);
		var li = $('<li>');
		var deleteButton = $('<button>').text('delete');
		deleteButton.click(deleteItem);
		li.append(link).append(deleteButton);
		$('#feeds').append(li);
	}
}

var deleteItem = function(e) {
	$(e.target).parent().remove();
}

var appendLink = function(data) {
		var googleURL = parseURL(data['appleURL']);
		var link = $('<a>').attr('href', googleURL).text(data['submit_at']);
		var li = $('<li>');
		li.append(link);
		$('#feeds').append(li);
}

var warningBannerShow = function() {
	console.log("This is a test warning banner");
}

var generateWarning = function() {
	var element = $('<p>').attr('class', 'test warning').text('this is a test'); 
	$('body').append(element);
}

var parseURL = function(appleURL){
	var googleURL;
	var matcher = /-?\d+\.\d{6}/g;
	var matchResult = appleURL.match(matcher);
	googleURL = "comgooglemaps://?center=" + matchResult[0] +','+ matchResult[1] + "&zoom=14&views=traffic";
	return googleURL;
};

var deleteURL = function() {

}

var sendMockedMail = function() {

}
