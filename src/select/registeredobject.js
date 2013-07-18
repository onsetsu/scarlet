/**
 * Scarlet.Object provides basic functionality for all objects in the library.
 * 
 */
(function(Scarlet, undefined){

	Scarlet.RegisteredObject = Scarlet.Object.subclass(function constructor() {
		this.class.addInstance(this);
	});

	//Scarlet.RegisteredObject.instances = [];
	
	Scarlet.RegisteredObject
		.addClassMethod("addInstance", function(instance) {
			if(!this.instances) this.instances = [];
		
			this.instances.push(instance);
		})
		.addClassMethod("removeInstance", function(instance) {
			if(!this.instances) this.instances = [];
			
			var index = this.instances.indexOf(instance);
			if(index !== -1)
			{
				this.instances.splice(index, 1);
			}
			else
			{
				// TODO: error if no match
			}
		})
		.addMethod("destroy", function() {
			this.class.removeInstance(this);
		});

})(Scarlet);
