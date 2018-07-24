
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


