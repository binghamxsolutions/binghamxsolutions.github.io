let cards = document.getElementsByClassName("pricing");

function valueOut(obj) {
	output = document.getElementById("value");
	test = document.getElementById('test');
	toggler = document.getElementById('toggle');
	button = document.getElementById("indicator");
	dev = document.getElementById("dev");
	design = document.getElementById("design");

	if (test.checked==true) {
		output.innerHTML = "Development";
		button.style.left= "100px";
		output.style.left = "35px";
		output.style.color = "#fff";
		toggler.style.backgroundColor = "var(--ebony)";
		design.style.display = "none";
		dev.style.display = "grid";
	} else {
		output.innerHTML = "Design";
		output.style.left = "125px";
		output.style.color = "#000";
		button.style.left= "0px";
		toggler.style.backgroundColor = "var(--bone)";
		design.style.display = "grid";
		dev.style.display = "none";
	}
}

window.onload = () => {
	for (i = 0; i < cards.length; i++) {
		cards[i].setAttribute("tabindex", "0");
	}
}