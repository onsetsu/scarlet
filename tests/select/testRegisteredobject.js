TestCase("testRegisteredObject", sinon.testCase({
	setUp: function() 
	{
		this.RegisteredObjectTest = Scarlet.RegisteredObject.subclass(function() {});
	},
	
	tearDown: function()
	{
	}
	,
	
	// Each class should manage a separate list of its instances.
	"testInstanceListExists": sinon.test(function() {
		var subClass = Scarlet.Object.subclass();
		var subSubClass = subClass.subclass();
		var subSubSubClass = subSubClass.subclass();

		assertNotSame(Scarlet.Object.instances, subClass.instances);
		assertNotSame(Scarlet.Object.instances, subSubClass.instances);
		assertNotSame(Scarlet.Object.instances, subSubSubClass.instances);
		assertNotSame(subClass.instances, subSubClass.instances);
		assertNotSame(subClass.instances, subSubSubClass.instances);
		assertNotSame(subSubClass.instances, subSubSubClass.instances);
	}),

	// An instance should be contained in each list of instances of its (super-)classes.
	"testSingleInstance": sinon.test(function() {
		var subClass = Scarlet.Object.subclass();
		var subSubClass = subClass.subclass();
		var subSubSubClass = subSubClass.subclass();
		
		var object = new Scarlet.Object();
		var subObject = new subClass();
		var subSubObject = new subSubClass();
		var subSubSubObject = new subSubSubClass();
		
		assertTrue(_.contains(Scarlet.Object.instances, object));
		assertFalse(_.contains(subClass.instances, object));
		assertFalse(_.contains(subSubClass.instances, object));
		assertFalse(_.contains(subSubSubClass.instances, object));
		
		// TODO: add instance to repective list of instances to green this test.
		assertTrue(_.contains(Scarlet.Object.instances, subObject));
		assertTrue(_.contains(subClass.instances, subObject));
		assertFalse(_.contains(subSubClass.instances, subObject));
		assertFalse(_.contains(subSubSubClass.instances, subObject));
		
		assertTrue(_.contains(Scarlet.Object.instances, subSubObject));
		assertTrue(_.contains(subClass.instances, subSubObject));
		assertTrue(_.contains(subSubClass.instances, subSubObject));
		assertFalse(_.contains(subSubSubClass.instances, subSubObject));
		
		assertTrue(_.contains(Scarlet.Object.instances, subSubSubObject));
		assertTrue(_.contains(subClass.instances, subSubSubObject));
		assertTrue(_.contains(subSubClass.instances, subSubSubObject));
		assertTrue(_.contains(subSubSubClass.instances, subSubSubObject));
	})
	
	/*
		assertTrue(_.contains(Scarlet.Object.instances, obj));
	,
	
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
