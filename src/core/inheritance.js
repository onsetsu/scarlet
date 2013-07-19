/**
 * Extend Scarlet with a convenient method for inheritance.
 * 
 */
Scarlet.inheritsFrom = function(childInitialize, superClass)
{
	// Manage new object and call initialize.
	var childClass = function(/* arguments */) {
		this.class = childClass;
		this.class.addInstance(this);
		this.initialize.apply(this, arguments);
	};
	
	var chain = function() {};
	chain.prototype = superClass.prototype;
	childClass.prototype = new chain();
	// enable static method inheritance
	childClass.__proto__ = superClass;
	// Add readable static superclass reference.
	childClass.superClass = superClass;
	childClass.prototype.constructor = chain;
	// TODO: find other name for parent reference
	childClass.prototype.parent = superClass.prototype;
	
	// Use default implementation if no initialize was given.
	childInitialize = childInitialize || function(/* arguments */) { this.parent(); };
	// Initialize function is to be called, when a new object is created.
	childClass.addMethod("initialize", childInitialize);
	
	// Introduce list of instances.
	childClass.instances = [];
	
	return childClass;
};

