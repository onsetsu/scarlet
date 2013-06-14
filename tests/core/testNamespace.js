TestCase("testNamespace", sinon.testCase({
	setUp: function() 
	{		
	},
	
	tearDown: function()
	{
	},
		
	// define new simple namespaces
	"testCreateSimpleNamespace": function()
	{
		Scarlet.namespace("hello");
		assertNotUndefined(Scarlet.hello);
	},

	// define new nested namespaces
	"testCreateNestedNamespace": function()
	{
		Scarlet.namespace("foo.bar");
		assertNotUndefined(Scarlet.foo);
		assertNotUndefined(Scarlet.foo.bar);
		// can't test that window.bar is undefined due to a jstestdriver bug
		// assertUndefined(bar);
	},

	// consider already defined namespaces
	"testAlreadyDefinedNamespaces": function()
	{
		window.definedNamespace = {
			defined: true
		};
		Scarlet.namespace("definedNamespace.nestedSpace");
		assertNotUndefined(Scarlet.definedNamespace);
		assertNotUndefined(Scarlet.definedNamespace.nestedSpace);
		assertTrue(definedNamespace.defined);
	},
	
	// return the new namespace
	"testReturnNamespace": function()
	{
		var actualNamespace = Scarlet.namespace("returnedNamespace");
		assertSame(Scarlet.returnedNamespace, actualNamespace);
	}
	
}));
