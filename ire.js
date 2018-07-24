<<<<<<< HEAD
// Clicking on picture logs 'Clicked' to javascript console

function change() {
	var highlight = document.getElementsByTagName('img');
	console.log('clicked');
}

change();
=======
// Clicking on button toggles registration form as well as changing text within button

var x = document.getElementById("thisDiv");
var y = document.querySelector("button");


function reg() {
	
	if (x.style.display === "none") {
		x.style.display = "block";
		y.innerHTML = "Register Now!"
	} else {
		x.style.display = "none";
		y.innerHTML = "Are you sure?";
	}
	
};

>>>>>>> Changed javascript to toggle registration form
