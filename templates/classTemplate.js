/**
 * Template description.
 * 
 */
(function(Onsetsu, undefined){

Onsetsu.Template = function()
{
	Onsetsu.Object.call(this);
};

Onsetsu.inheritsFrom(Onsetsu.Template, Onsetsu.Object);

// A static method.
Onsetsu.Template.staticMethod = function(param1, param2)
{
	return param1;
};

// An object method.
Onsetsu.Template.prototype.objectMethod = function(param1, param2)
{
	return param1;
};

})(Onsetsu);

Onsetsu.include("");