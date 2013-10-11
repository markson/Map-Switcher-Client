describe("UrlParser", function(){
	it("should return the right url", function(){
		var result = parseURL("http://maps.apple.com/?lsp=9902&sll=-43.575285,172.762549&q=Sumner,%20New%20Zealand");	
		expect(result).toEqual("comgooglemaps://?center=-43.575285,172.762549&zoom=14&views=traffic");
		expect(result).not.toEqual("haha");
	});

	it("have a object a and have foo property", function(){
		expect(a.foo).toBeDefined();
	});
});

describe("Jasmine", function(){
	var aa = 1;
	it("for namespace test", function(){
		expect(a.bar).toBeUndefined();
	});

	it("has it's own name space", function(){
		//var aa = 1;
		expect(aa).toBeDefined();
	});

	it("can have 2 expect", function(){
		expect("3").toEqual("3");
		expect("2").toEqual("2");
	});

});
