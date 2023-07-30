function toTop() {
	btn = document.getElementsByClassName("to-top");
	otherBtnExists = false;
	
	if (btn.length > 1) { //checls to see if another button exists
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
window.addEventListener('scroll', toTop);