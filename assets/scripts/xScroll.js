let unsupportedMediaSize = window.matchMedia("(max-width: 239px)");
let mediaQueryTest = window.matchMedia("(max-width: 239px)");

function toTop() {
	btn = document.getElementsByClassName("to-top");
	otherBtnExists = false;
	
	if (btn.length > 1) { //checks to see if another button exists
		otherBtn = true;
	}
	
	if ((document.body.scrollTop > 30) || (document.documentElement.scrollTop > 30)) {
		btn[0].style.display = "block";
		
		if (otherBtnExists == true) {// only shows the second to-top button if there are more than one
			btn[1].style.display = "block";	
		}
	} else {
		btn[0].style.display = "none";
		if (otherBtnExists) {// only shows the second to-top button if there are more than one
			btn[1].style.display = "block";	
		}
	}	
}


function openSubMenu() {
	nav = document.getElementsByTagName("nav")[1];
	nav.style.visibility = "visible";
	nav.style.opacity = "1";
}

function closeSubMenu() {
	nav = document.getElementsByTagName("nav")[1];
	nav.style.opacity = "0";
	nav.style.visibility = "hidden";
}

function openContactOptions() {
	contactOptionMenu = document.getElementById("contact");
	contactOptionMenu.style.display = "grid";
}

function closeContactOptions() {
	contactOptionMenu = document.getElementById("contact");
	contactOptionMenu.style.display = "none";
}

window.addEventListener('scroll', toTop);

mediaQueryTest.addEventListener('change', event => {
	if(event.matches) {
		window.scrollTo({top: 0, left: 0, behavior: "instant"});
	}
});
window.onpagehide = () => {closeSubMenu()};

window.onload = () => {
	if (unsupportedMediaSize.matches) {
		window.scrollTo({top: 0, left: 0, behavior: "instant"});
	}
};