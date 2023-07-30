let	isMobileWidth = window.matchMedia("(max-width: 479px)");
let	isTabletWidth = window.matchMedia("(max-width: 767px)");


function showDev(x, obj) {
	option = document.getElementById("page");
	option_list = document.getElementById("development").querySelectorAll("button");
	option_list_length = document.getElementById("development").querySelectorAll("button").length;
	option.removeAttribute("srcdoc");
	src = "samples/development/" + x + ".html";
	option.setAttribute('src', src);
	option.setAttribute('title', obj.innerHTML);
	
	for (i = 0; i < option_list_length; i++) {
		option_list[i].classList.remove("selected");
	}
	obj.classList.add("selected");
	parent_elmt = obj.parentElement;
	button_list = parent_elmt.querySelectorAll("button");
	setButton(button_list, "current_dev_pos");
}
function showSamples(obj) {
	scrub = document.getElementsByClassName("active")[0];
	display_name = obj.innerHTML.toLowerCase();
	articles = document.getElementsByTagName("article");
	show = document.getElementById(display_name);
	
	scrub.removeAttribute("class");
	obj.setAttribute("class", "active");
	
	for (i = 0; i < articles.length; i++) {
		articles[i].style.display = "none";
	}
	
	
	show.style.display = "grid";		
/* 	if (isMobileWidth.matches || isTabletWidth.matches) {
	} else {
		show.style.display = "flex";
	}*/
} 
function showDesign(x, obj) {
	option = document.getElementById("media");
	option.removeAttribute("srcdoc");
	option_list = document.getElementById("design").querySelectorAll("button");
	option_list_length = document.getElementById("design").querySelectorAll("button").length;

	src = "samples/designs/" + x + ".html";
	option.setAttribute('src', src);
	option.setAttribute('title', obj.innerHTML);
	
	for (i = 0; i < option_list_length; i++) {
		option_list[i].classList.remove("selected");
	}
	obj.classList.add("selected");
	parent_elmt = obj.parentElement;
	button_list = parent_elmt.querySelectorAll("button");
	setButton(button_list, "current_design_pos");
}
function setButton(button_list, sessionName) {
	button_position = 0;
	
	for (i = 0; i < button_list.length; i++) {
		if (button_list[i].classList.contains("selected")) {
			button_position = i;
		}
	}
	
	sessionStorage.setItem(sessionName, button_position);
}

window.onload = function() {
	type_switch = document.getElementsByClassName("choice");
	option_list = document.getElementsByClassName("options");
	dev_session = (sessionStorage.getItem("current_dev_pos"));
	design_session = (sessionStorage.getItem("current_design_pos"));// == null);
	frame_data = document.getElementById("page");

	if (frame_data.getAttribute("srcdoc") != null) {
		if ((frame_data.hasAttribute("srcdoc") == true)) {
			sessionStorage.removeItem("current_dev_pos");
			sessionStorage.removeItem("current_design_pos");		
		}
	}

	if (dev_session == false && (type_switch[1].style.display != "none")) {
		dev_button = sessionStorage.getItem("current_dev_pos");
		console.log(dev_button);
		dev_button_list = option_list[0].querySelectorAll("button");
		dev_button_list[dev_button].classList.add("selected");
	} else if (design_session == false && (type_switch[0].style.display != "none")) {
		design_button = sessionStorage.getItem("current_design_pos");
		design_button_list = option_list[1].querySelectorAll("button");
		design_button_list[design_button].classList.add("selected");
	}
};