TestCase("testRegisteredObject", sinon.testCase({
	setUp: function() 
	{
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
	
	// Each class should manage a separate list of its instances.
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
	}),

	// An instance should be contained in each list of instances of its (super-)classes.
	"testMultipleInstances": sinon.test(function() {
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
	}),
	
	// Destroyed Objects should not be included in the list of instances of the class anymore (other objects should remain the same).
	"testDestroyedRegisteredObjectCanNotBeFoundInClassSideList": sinon.test(function() {
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

		subSubObject.destroy();
		
		assertTrue(_.contains(Scarlet.Object.instances, object));
		assertFalse(_.contains(subClass.instances, object));
		assertFalse(_.contains(subSubClass.instances, object));
		assertFalse(_.contains(subSubSubClass.instances, object));
		
		assertTrue(_.contains(Scarlet.Object.instances, subObject));
		assertTrue(_.contains(subClass.instances, subObject));
		assertFalse(_.contains(subSubClass.instances, subObject));
		assertFalse(_.contains(subSubSubClass.instances, subObject));
		
		assertFalse(_.contains(Scarlet.Object.instances, subSubObject));
		assertFalse(_.contains(subClass.instances, subSubObject));
		assertFalse(_.contains(subSubClass.instances, subSubObject));
		assertFalse(_.contains(subSubSubClass.instances, subSubObject));
		
		assertTrue(_.contains(Scarlet.Object.instances, subSubSubObject));
		assertTrue(_.contains(subClass.instances, subSubSubObject));
		assertTrue(_.contains(subSubClass.instances, subSubSubObject));
		assertTrue(_.contains(subSubSubClass.instances, subSubSubObject));
	})
}));
