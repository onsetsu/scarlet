TestCase("testRegisteredObject", sinon.testCase({
	setUp: function() 
	{
		this.RegisteredObjectTest = Scarlet.RegisteredObject.subclass(function() {});
	},
	
	tearDown: function()
	{
	}
	/*
	,
	
	// Created RegisteredObjects should be included in the list of instances of the class.
	"testRegisteredObjectCanBeFoundInClassSideList": sinon.test(function() {
		var obj = new Scarlet.RegisteredObject();
		
		assertTrue(_.contains(Scarlet.RegisteredObject.instances, obj));
	}),
	
	// Destroyed RegisteredObjects should not be included in the list of instances of the class anymore.
	"testDestroyedRegisteredObjectCanNotBeFoundInClassSideList": sinon.test(function() {
		
		var obj = new Scarlet.RegisteredObject();
		obj.destroy();
		
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, obj));
	}),
	
	// Destroyed RegisteredObjects should not be included in the list of instances of the class anymore.
	"testSubclassObjectShouldBeRegisteredInBothClasses": sinon.test(function() {
		this.RegisteredObjectTest.addInstance("hallo");
		assertTrue(_.contains(this.RegisteredObjectTest.instances, "hallo"));
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, "hallo"));
		
		var classObj = new Scarlet.RegisteredObject();
		var subclassObj = new this.RegisteredObjectTest();
		
		assertTrue(_.contains(Scarlet.RegisteredObject.instances, classObj));
		//assertFalse(_.contains(Scarlet.RegisteredObject.instances, subclassObj));
		assertTrue(_.contains(this.RegisteredObjectTest.instances, classObj));
		assertTrue(_.contains(this.RegisteredObjectTest.instances, subclassObj));
		
		/*
		classObj.destroy();
		
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, classObj));
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, subclassObj));
		assertFalse(_.contains(this.RegisteredObjectTest.instances, classObj));
		assertTrue(_.contains(this.RegisteredObjectTest.instances, subclassObj));
		
		subclassObj.destroy();
		
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, classObj));
		assertFalse(_.contains(Scarlet.RegisteredObject.instances, subclassObj));
		assertFalse(_.contains(this.RegisteredObjectTest.instances, classObj));
		assertFalse(_.contains(this.RegisteredObjectTest.instances, subclassObj));
		*/
	//})
	
}));
