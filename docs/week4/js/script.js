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

// Triggering an error
// console.log(z);

// Lesson 43
var string = "Hello";
string += " World";
console.log(string + "!");

// Math - Regular Operators
console.log((5 + 4) / 3);
console.log(undefined / 5);
function test (a) {
	console.log(a / 5);
}
test();

// Equality
var x = 4, y = 4;
if (x == y) {
	console.log("x = 4 is equal to y = 4");
}

x = "4";
if (x == y) {
	console.log("x = '4' is equal to y = 4");
	console.log("This is type coersion");
}

// Strict Equality
if (x === y) {
	console.log("Strict: x = '4' is equal to y = 4");
}
else {
	console.log("Strict: x = '4' is NOT equal to y = 4");
}

// If statement (all false)
if (false || null || undefined || "" || 0 || NaN) {
	console.log("This line won't ever execute");
}
else {
	console.log("All these operators are false");
}

// If statement (all true)
if (true && "hello" && 1 && -1 && "false") {
	console.log("All true");
}

// Best practices for {} Put them on the same line 
function a()
{
	return
	{
		name: "jenne"
	};
}

function b() {
	return {
		name: "jedi"
	};
}

console.log(a());
console.log(b());

// For Loop
var sum = 0;
for (var i = 0; i < 10; i++) {
	console.log(i);
	sum += i;
}
console.log("sum of 0 through 9 is: " + sum);

// Lesson 44
function orderChickenwith(sideDish) {
	if (sideDish === undefined) {
		sideDish = "whatever";
	}
	console.log("Chicken with "+ sideDish);
}

orderChickenwith("noodles");
orderChickenwith();

function orderFishwith(sideDish) {
	// sideDish is false since undefined, so evaluates the "whatever"
	// returns the first thing that returned true
	sideDish = sideDish || "whatever";
	console.log("Fish with "+ sideDish);
}

orderFishwith("noodles");
orderFishwith();

var x = 10;
if ( (null) || (console.log("Hello")) || x > 5 ) {
  console.log("Hello");
}