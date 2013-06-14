/**
 * Extend Scarlet with a convenient method for inheritance.
 * 
 */
/*
 * old version
Scarlet.inheritsFrom = function(childClass, superClass)
{
	childClass.prototype = new superClass;
	// enable static method inheritance
	childClass.__proto__ = superClass;
	childClass.prototype.constructor = childClass;
	childClass.prototype.parent = superClass.prototype;

	return childClass;
};
*/
Scarlet.inheritsFrom = function(childClass, superClass)
{
	var realChild = function(/* arguments */) {
		superClass.apply(this, arguments);
		childClass.apply(this, arguments);
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

