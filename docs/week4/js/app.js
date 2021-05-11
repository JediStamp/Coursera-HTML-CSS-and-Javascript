sayHello();
sayHi();

// using fake namespaces
jenneGreeter.sayHello();
jediGreeter.sayHi();

function a() {
	console.log("Hello");
}
a();

var a = function () {
	console.log("Hello");
};

a();

var a = (function () {
	console.log("Hello");
});

a();

// Immediately invoked function expression IIFE
(function () {
	console.log("Hello");
})();

(function (name) {
	console.log("Hello " + name);
})("Jenne!!");