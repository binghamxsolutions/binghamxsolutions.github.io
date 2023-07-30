var position = 0;

function openCallout() {
	popup = document.getElementById("callout");
	popup.style.display = "grid";
}

function closeCallout() {
	popup = document.getElementById("callout");
	popup.style.display = "none";
}

function next() {
	show(position += 1);
}

function show(n) {
	testimonials = document.getElementsByClassName("testimonial");
	
	if (n >= testimonials.length) {
		position = 0;
	} else if (n < 0) {
		position = (testimonials.length - 1);
	}
	//to simulate a continous loop
	
	for (var i = 0; i < testimonials.length; i++) {
		testimonials[i].style.display = "none";
	}
	//hide all testimonials
	
	testimonials[position].style.display = "grid";
	//show the selected testimonial
}
window.onload = function() {show(position)};
setInterval(next, 5000);