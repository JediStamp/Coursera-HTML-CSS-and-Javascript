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

// Lesson 45
// Objects name / value pairs
var company = new Object();
company.name = "Coursera";
console.log(company);
company.ceo = new Object();
company.ceo.firstName = "Jan";
company.ceo.faveColor = "green";
console.log(company);
// dot notation can't be used if the property name has spaces
console.log("Company CEO's fave color is: " + company.ceo.faveColor);
// bracket notation can be used if there are spaces in property name
console.log(company["name"]);

var varProperty = "lastName";
company.ceo[varProperty] = "smith";
console.log(company.ceo.firstName + " " + company.ceo.lastName);
 
 // Creating Objects using Literal Syntax
 var Algonquin = {
 	name: "Algonquin College",
 	campus: {
 		main: "Ottawa",
 		satellite: "Perth",
 		online: "ACOnline"
 	},
 	level: "college",
 	$tuition: "$$$",
 	"property with spaces": "valid"
 };

 console.log(Algonquin);
 console.log(Algonquin.campus.online);

 // Lesson 46
 // functions are first-class data types 
 // you can do the same thin as you can with regular objects
 // functions are objects
 function multiply(x, y) {
 	return x * y;
 }

 console.log(multiply(5,3));
 multiply.version = "v.1.0.0";
 console.log(multiply);
 console.log(multiply.toString()); //avail on all functions
console.log(multiply.version);

// Function Factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier * x;
	};
	return myFunc;
}
var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));

var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

// Passing Functions as Arguments
function doOperationOn(x, operation) {
	return operation(x);
}

var result = doOperationOn(5, multiplyBy3);
console.log(result);

result = doOperationOn(100, doubleAll);
console.log(result);

function makeMultiplier(multiplier) {
  var myFunFunc = function (x) {
    return multiplier * x;
  };
  
  return myFunFunc;
}

var operation = makeMultiplier(10);
console.log(operation(10));

// Lesson 47

// copying /passing by value 
// if you change the value after the passing, 
// the copied one does not change

// copying by reference 
// they both point to the same
// point.

// Objects are passed by reference. 
// Primitives are passed by value.

// Passing by value
console.log("Passing by value");
var a = 7;
var b = a;
console.log("a is: " + a + " b is: " + b);
b = 5;
console.log("after update");
console.log("a is: " + a + " b is: " + b);

// Passing by reference
console.log("Passing by reference");
var c = {x: 7};
var d= c;
console.log("c is: " + c.x + " d is: " + d.x);
d.x = 5;
console.log("after update");
console.log("c is: " + c.x + " d is: " + d.x);

function changePrimitive(primValue){
	console.log("in changePrimitive...");
	console.log("before:");
	console.log(primValue);

	primValue = 5;
	console.log("after:");
	console.log(primValue);
}

var value = 7;
changePrimitive(value);
console.log("after changePrimitive, orig value: ");
console.log(value);

function changeObject(objValue){
	console.log("in changeObject...");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}

value = {x: 7};
changeObject(value);
console.log("after changeObject, orig value: ");
console.log(value);

// Lesson 48 - Creating objects
function test() {
	console.log("Hello World!");
	console.log(this); // Pointing to the global window object
	this.myName = "jenne";
}
test()
console.log(window.myName); // Global window object

// Function constructors usually capitalized
function Circle (radius) {
	console.log(this);
	this.radius = radius;
	//like in Java, constructors can't return anything
	this.getArea = function () {
		return Math.PI * Math.pow(this.radius, 2);
	};
}

var myCircle = new Circle(10); // new Object();
console.log(myCircle);
console.log(myCircle.getArea());

// Prototype is to make classes with functions
// instead of recreating function in every object.

function Circle2 (radius) {
	this.radius = radius;
}
// Put this outside constructor so it isn't processed each time
Circle2.prototype.getArea = function () {
	return Math.PI * Math.pow(this.radius, 2);
};

var myCircle2 = new Circle2(10);
console.log(myCircle2);

var myCircle3 = new Circle2(20);
console.log(myCircle3);

// Lesson 49
// Object Leterals and "this"
var literalCircle = { // new Object()
	radius: 10,
	getArea: function () {
		console.log(this);

		var increaseRadius = function () {
			this.radius = 20;
		};
		increaseRadius();
		console.log(this.radius);
		console.log(window); //window object radius is 20

		var self = this; //to make a function within a function refer to this
		var increaseRadius2 = function () {
			self.radius = 20;
		};
		increaseRadius2();
		console.log(this.radius); //this radius is 20

		return Math.PI * Math.pow(this.radius, 2);
	}
};

console.log(literalCircle.getArea());

function Dog(name) {
  this.name = name;
}

Dog.prototype.bark = function () {
  console.log(this.name + " likes barking! Bark!");
}

var max = new Dog("Max", "Buddy");
max.bark();

// Lesson 50 - Arrays
var array = new Array();
array[0] = "jenne";
array[1] = 2;
array[2] = function(name) {
	console.log("Hello " + name);
};
array[3] = {course: "HTML, CSS & JS"};

console.log(array);
console.log(array[0]);
console.log(array[2]());
console.log(array[2]("name"));
console.log(array[2](array[0]));
console.log(array[3].course);

// short-hand array creation
var names = ["Jenne", "Jedi", "Jennifer"];
console.log(names);

var names2 = [
{name: "Jenne"}, //object with name Jenne
"Jedi",
"Jennifer"];
console.log(names2);

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}

// sparse arrays
names[10] = "Jim";

for (var i = 0; i < names.length; i++) {
	console.log("Hello " + names[i]);
}

var myObj = {
	name: "Jenne",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};

for (var prop in myObj){
	console.log(prop + ":" + myObj[prop]);
}

for (var name in names) {
	console.log("Hi " + names[name]);
}

names.greeting = "Hi!";

for (var name in names) {
	console.log("Hi " + names[name]);
} // greeting is a property of the object, so it is included in the loop

// Lesson 51 - Closures
function makeMultiplier (multiplier) {
	function b(){
		console.log("Multiplier is: " + multiplier);
	}
	b();
	return (
		function (x) {
			return multiplier * x;
		}
		);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));

// Lesson 52 - Fake namespaces
// see additional files