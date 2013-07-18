/**
 * Extend Scarlet with a convenient method for inheritance.
 * 
 */
Scarlet.inheritsFrom = function(childClass, superClass)
{
	// TODO: introduce initialize function and
	// leave constructor for management
	var realChild = function(/* arguments */) {
		superClass.apply(this, arguments);
		childClass.apply(this, arguments);
		this.class = realChild;
	};
	var chain = function() {};
	chain.prototype = superClass.prototype;
	realChild.prototype = new chain();
	// enable static method inheritance
	realChild.__proto__ = superClass;
	realChild.prototype.constructor = chain;
	realChild.prototype.parent = superClass.prototype;
	return realChild;
};

