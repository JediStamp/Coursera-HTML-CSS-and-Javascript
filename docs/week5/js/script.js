// Week 5
// Lesson 53 DOM Manipulation
console.log(document.getElementById("title"));
console.log(document instanceof HTMLDocument);

function sayHello () {
	//let's retrieve the value in the text box
	var name = document.getElementById("name").value;
	console.log(name);
	var msg = "<h2>Hello " + name + "!</h2>";

	if (name === 'student'){
		var title = document.querySelector("#title").textContent;
		title += " & Lovin' it LOL";
		title = document.querySelector("#title").textContent = title;
	}

	document.getElementById("content").textContent = msg;
	document.getElementById("content").innerHTML = msg;
}