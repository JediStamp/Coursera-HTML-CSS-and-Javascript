// Lesson 40 
var x = "Hello World!";

// Lesson 41
var message = "in global";
console.log("global: message = " + message);

var a = function() {
	var message = "inside a";
	console.log("a: message = " + message);
	function b () {
		console.log("b: message = " + message);
	};
	b();
};

a();

// Lesson 42
var y;
console.log(y);

if (y == undefined ) {
	console.log("y is undefined");
}

y = 5;
if (y == undefined) {
	console.log("y is still undefined");
}
else {
	console.log("y is now defined as: " + y);
}

console.log(z);

//Lesson 43