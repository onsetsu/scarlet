/**
 * Scarlet.Object provides basic functionality for all objects in the library.
 * 
 */
(function(Scarlet, undefined){

	var ProtoObject = function protoConstructor() {};

	ProtoObject.addClassMethod = function(methodName, method) {
		this[methodName] = method;
		return this;
	};
	
	ProtoObject
		.addClassMethod("subclass", function(childConstructor) {
			return Scarlet.inheritsFrom(childConstructor, this);
		})
		.addClassMethod("addMethod", function(methodName, method) {
			var superCallName = "parent";
			var fnTest = /xyz/.test(function(){xyz;}) ? new RegExp(/\bparent\b/) : /.*/;
			
			var parent = {};
			parent[methodName] = this.prototype[methodName]; // save original function
			
			if( 
				typeof method === "function" &&
				typeof(parent[methodName]) == "function" && 
				fnTest.test(method)
			) {
				this.prototype[methodName] = (function(name, fn){
					return function() {
						var tmp = this[superCallName];
						this[superCallName] = parent[name];
						var ret = fn.apply(this, arguments);			 
						this[superCallName] = tmp;
						return ret;
					};
				})(methodName, method);
			} else {
				this.prototype[methodName] = method;
			}
			return this;
		});
	
	ProtoObject.prototype.class = ProtoObject;

	
	Scarlet.Object = ProtoObject
		.subclass(function constructor() {
			this.__cache = {};
		})
		.addMethod("set", function(name, value) {
			this.__cache[name] = value;
			return this;
		})
		.addMethod("get", function(name) {
			return this.__cache[name];
		});
})(Scarlet);
