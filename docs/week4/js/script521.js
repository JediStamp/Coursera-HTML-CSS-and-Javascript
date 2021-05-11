var name = "Jenne";
function sayHello() {
	console.log("Hello " + name);
}

(function(window){
	var jenneGreeter = {};
	jenneGreeter.name = "Jenne"
	jenneGreeter.sayHello = function sayHello() {
		console.log("Hello " + jenneGreeter.name);
	}

	var greeting = "Hello ";
	jenneGreeter.sayHello = function sayHello() {
		console.log(greeting + jenneGreeter.name);
	}

	window.jenneGreeter = jenneGreeter;	
})(window);
