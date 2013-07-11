TestCase("testTemplate", sinon.testCase({
	setUp: function() 
	{	
	},
	
	tearDown: function()
	{
	},
		
	// TODO: write comment.
	"testSomeName": sinon.test(function() {
		var callbackContext = {
				callbackFunction: function() {}
		};
		var callbackArg1 = "foo";
		var callbackArg2 = "bar";
	    this.mock(callbackContext)
	    	.expects("callbackFunction")
	    	.on(callbackContext)
	    	.once()
	    	.withExactArgs(callbackArg1, callbackArg2);

	    var callback = new Scarlet.Callback(callbackContext, callbackContext.callbackFunction);
	    callback.execute(callbackArg1, callbackArg2);
	})
	
}));
