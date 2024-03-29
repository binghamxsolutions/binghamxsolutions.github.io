let	isTabletWidth = window.matchMedia("(max-width: 767px)");
let devOption = null;
let designOption = null;
let isDev = false;
let isDesign = false;

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
} 

function showDev(x, obj) {
	isDev = true;
	isDesign = false;
	option = document.getElementById("page");
	option.removeAttribute("srcdoc");
	src = "samples/development/" + x + ".html";
	option.setAttribute('src', src);
	option.setAttribute('title', obj.innerHTML);
		
	if (isTabletWidth.matches) {
		devOption = obj - 1;
	} else {
		parent_elmt = obj.parentElement;
		button_list = parent_elmt.querySelectorAll("button");
		option_list = document.getElementById("development").querySelectorAll("button");
		option_list_length = document.getElementById("development").querySelectorAll("button").length;
		
		for (i = 0; i < option_list_length; i++) {
			option_list[i].classList.remove("selected");
			
			if (option_list[i] == obj) {
				devOption = i;
			}
		}
		obj.classList.add("selected");
	}
}

function showDesign(x, obj) {
	isDev = false;
	isDesign = true;
	option = document.getElementById("media");
	option.removeAttribute("srcdoc");
	src = "samples/designs/" + x + ".html";
	
	option.setAttribute('src', src);
	option.setAttribute('title', obj.innerHTML);

	if (isTabletWidth.matches) {
		designOption = obj - 1;
	} else {
		option_list = document.getElementById("design").querySelectorAll("button");
		option_list_length = document.getElementById("design").querySelectorAll("button").length;
		parent_elmt = obj.parentElement;
		button_list = parent_elmt.querySelectorAll("button");
		
		for (i = 0; i < option_list_length; i++) {
			option_list[i].classList.remove("selected");
			
			if (option_list[i] == obj) {
				designOption = i;
			}
		}
		obj.classList.add("selected");
	}
}

window.onresize = function()  {
	if (isTabletWidth.matches == false) {
		if (isDesign == true) {
			option_list = document.getElementById("design").querySelectorAll("button");
			option_list_length = document.getElementById("design").querySelectorAll("button").length;
			
			for (i = 0; i < option_list_length; i++) {
				option_list[i].classList.remove("selected");
			}
			option_list[designOption].classList.add("selected");
			
		} else if (isDev == true) {
			option_list = document.getElementById("development").querySelectorAll("button");
			option_list_length = document.getElementById("development").querySelectorAll("button").length;
			
			for (i = 0; i < option_list_length; i++) {
				option_list[i].classList.remove("selected");
			}
			option_list[devOption].classList.add("selected");
		}
	} else {
		if (isDesign == true) {
			option_list = document.getElementById("design").querySelectorAll("select");
			option_list[0].selectedIndex = designOption + 1;			
		} else if (isDev == true) {
			option_list = document.getElementById("development").querySelectorAll("select");
			option_list[0].selectedIndex = devOption + 1;
		}
		
	}
};


window.onload = function() {
	dev_frame = document.getElementById("page");
	design_frame = document.getElementById("media");
	dev_frame.outerHTML = "<iframe id='page' "+ 
		"srcdoc=\"<article style='text-align:center;'><h1 style='text-align:center;'>Need a few ideas?</h1>" +
		"<p>Choose an option to see page layout examples</p></article>\">" +
		"<p>NOTICE: Your browser does not support iframes</p></iframe>";
		
	design_frame.outerHTML = "<iframe id='media' "+ 
				"srcdoc=\"<article style='text-align:center;'><h1 style='text-align:center;'>Need a few ideas?</h1>" +
				"<p>Choose an option to see design examples</p></article>\">" +
				"<p>NOTICE: Your browser does not support iframes</p></iframe>";
	//resets iframe values to default on reload
	
	
	dev_select = document.getElementById("development").querySelectorAll("select");
	dev_select[0].selectedIndex = 0;
	design_select = document.getElementById("design").querySelectorAll("select");
	design_select[0].selectedIndex = 0;
	//sets select elements to default values on reload	
};