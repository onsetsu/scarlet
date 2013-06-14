TestCase("testUsing", sinon.testCase({
	setUp: function() 
	{		
	},
	
	tearDown: function()
	{
	},
		
	// Scarlet.using is defined.
	"testUsingDefined": function()
	{	
		assertNotUndefined(Scarlet.using);
	},
	
	// Scarlet.using allows scoping.
	"testUsingParameters": function()
	{	
		var expectedFoo = {"value": "oldValue"};
		var expectedBar = "bar";
		
		Scarlet.using(expectedFoo, expectedBar)
			.run(function testUsingParameters(actualFoo, actualBar) {
				assertEquals(expectedFoo, actualFoo);
				assertEquals(expectedBar, actualBar);
				
				actualFoo.foo = "newValue";
			});
		assertSame(expectedFoo.foo, "newValue");
	}
}));
