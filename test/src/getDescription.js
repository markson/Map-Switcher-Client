var getDescription = function(json) {
	/* var timeStamp = Date.parse(json['Date']); */
	var timeStamp = moment(json['Date']);
	var readableTime = timeParse(timeStamp);
	var name = getName(json);
	var queryWords = getQueryWords(getLocation(json));
	/* var finalString = readableTime + ' ' + name + "'s location : " + queryWords + ' '; */
	var finalString = "3 days ago" + ' ' + 'Dropped pin' + "'s location : " + queryWords + ' ';
	return finalString;
}
