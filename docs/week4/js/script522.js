var name = "Jedi";
function sayHi () {
	console.log("Hi " + name);
}

(function(window){
	var jediGreeter = {};
	jediGreeter.name = "Jedi";
	jediGreeter.sayHi = function () {
		console.log("Hi " + jediGreeter.name);
	}

	var greeting = "Hi ";
	jediGreeter.sayHi = function () {
		console.log(greeting + jediGreeter.name);
	}
	window.jediGreeter = jediGreeter;
})(window);
