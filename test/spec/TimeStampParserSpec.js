describe("The Time Parser", function(){
	var t = new Date();
	t.setMinutes(t.getMinutes() - 3);
	var readableTime = timeParse(t);
	it("the human readable time should be 3 minutes ago", function(){
		expect(readableTime).toEqual("3 minutes ago");
	});
});
