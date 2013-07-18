/**
 * Extend Scarlet with a convenient method for inheritance.
 * 
 */
Scarlet.inheritsFrom = function(childInitialize, superClass)
{
	// Manage new object and call initialize.
	var childClass = function(/* arguments */) {
		this.initialize.apply(this, arguments);
		this.class = childClass;
	};
	
	var chain = function() {};
	chain.prototype = superClass.prototype;
	childClass.prototype = new chain();
	// enable static method inheritance
	childClass.__proto__ = superClass;
	childClass.prototype.constructor = chain;
	childClass.prototype.parent = superClass.prototype;
	
	// Use default implementation if no initialize was given.
	childInitialize = childInitialize || function(/* arguments */) { this.parent(); };
	// Initialize function is to be called, when a new object is created.
	childClass.addMethod("initialize", childInitialize);
	
	return childClass;
};

