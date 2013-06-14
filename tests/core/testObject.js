TestCase("testObject", sinon.testCase({
	setUp: function() 
	{	
	},
	
	tearDown: function()
	{
	},
		
	// define new simple namespaces
	"testSupportSubclassing": function()
	{
		var Subclass = Scarlet.Object.subclass(function(aNumber) {
			this.aNumber = aNumber;
		});
		Subclass.addMethod("add", function(a){
			return this.aNumber + a;
		});
		
		var expectedNumber = 42;
		var subObject = new Subclass(expectedNumber);

		assertEquals(subObject.aNumber, expectedNumber);
		assertEquals(42 + 17, subObject.add(17));
	},
	
	// The definition of a class should be chainable.
	"testChainableClassDefinition": function()
	{
		var Subclass = Scarlet.Object
			.subclass(function(aNumber) {
				this.aNumber = aNumber;
			})
			.addMethod("add", function(a){
				return this.aNumber + a;
			})
			.addMethod("sub", function(a){
				return this.aNumber - a;
			});
		
		var expectedNumber = 42;
		var addedNumber = 17
		var subObject = new Subclass(expectedNumber);

		assertEquals(subObject.aNumber, expectedNumber);
		assertEquals(expectedNumber + addedNumber, subObject.add(addedNumber));
		assertEquals(expectedNumber - addedNumber, subObject.sub(addedNumber));
		
		// Scarlet.Object should not be affected.
		var obj = new Scarlet.Object();
		assertUndefined(obj.sub);
	},
	
	// The instances of subclass should call the super class' constructor before its own.
	"testChainableConstructors": function()
	{
		var spy = sinon.spy();
		var subSpy = sinon.spy();
		var subSubSpy = sinon.spy();

		var Sub = Scarlet.Object.subclass(spy);
		var SubSub = Sub.subclass(subSpy);
		var SubSubSub = SubSub.subclass(subSubSpy);

		new SubSubSub();
		sinon.assert.calledOnce(spy);
		sinon.assert.calledOnce(subSpy);
		sinon.assert.calledOnce(subSubSpy);
		sinon.assert.callOrder(spy, subSpy, subSubSpy);
	},
	
	// The instances of subclass should call the super class' constructor before its own.
	"testGetSet": function()
	{
		var obj = new (Scarlet.Object
			.subclass(function(){})
			.subclass(function(){})
		)();
		obj.set("foo", 42);
		assertEquals(42, obj.get("foo"));
	},
	
	// In child object methods you can call the parents method.
	"testCallParentMethod": function()
	{
		var addedValue = 17;
		var actualValue = 42;
		
		var spy = sinon.spy();
		var subSubClass = Scarlet.Object.subclass(function() {
			
		}).subclass(function(){
			
		}).addMethod("set", function(name, value) {
			this.super(name, value + addedValue);
		});
		
		var subSubObject = new subSubClass();
		subSubObject.set("actualValue", actualValue);
		assertEquals(actualValue + addedValue, subSubObject.get("actualValue"));
	}
}));
