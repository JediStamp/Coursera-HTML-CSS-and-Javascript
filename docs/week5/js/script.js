console.log(document.getElementById("name").value 
            + " Coursera!");
console.log(document.querySelector("#name").value 
            + " Coursera!");
// Week 5
// Add event handling (lesson 54)
document.addEventListener("DOMContentLoaded",
	function (event) {
		// Lesson 53 DOM Manipulation
		console.log(document.getElementById("title"));
		console.log(document instanceof HTMLDocument);

		function sayHello (event) {
			console.log(event);
			this.textContent = "Said it!";
			//let's retrieve the value in the text box
			var name = document.getElementById("name").value;
			// console.log(name);
			var msg = "<h2>Hello " + name + "!</h2>";

			// document.getElementById("content").textContent = msg;
			document.getElementById("content").innerHTML = msg;

			if (name === 'student'){
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it LOL";
				// we didn't have to select by ID, we could have selected by any css
				// if there were a bunch of elelments the same, this would affect the
				// first one
				document.querySelector("#title").textContent = title;
			}
		}

		// Lesson 54
		// Unobtrusive event binding 
		// (so we don't have a bunch of events in our JavaScript)
		document.querySelector("button").addEventListener("click", sayHello);
		// or could say 
		// document.querySelector("button").onclick = sayHello;
		document.querySelector("body").addEventListener("mousemove", 
			function (event) {
				if (event.shiftKey === true) {
				console.log("x: " + event.clientX);
				console.log("y: " + event.clientY);					
				}

			});

	});



