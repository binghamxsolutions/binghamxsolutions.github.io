let smallScreenSize = window.matchMedia("(min-width: 240px) and (max-width: 359px)");

function sizeHeader() {
	img = document.getElementById("logo");
	if(smallScreenSize.matches) {
		if ((document.body.scrollTop > 0) || (document.documentElement.scrollTop > 0)) {
			img.style.height = "0vh";
		} else {
			img.style.height = "20vh";
		}				
	} else {
		if ((document.body.scrollTop > 0) || (document.documentElement.scrollTop > 0)) {
			img.style.height = "50px";
		} else {
			img.style.height = "150px";
		}		
	}
}
function showBtn() {
	btn = document.getElementById("toTop");
	
	if ((document.body.scrollTop > 15) || (document.documentElement.scrollTop > 15)) {
		btn.style.display = "block";
	} else {
		btn.style.display = "none";
	}
}
function toTop() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
window.onscroll = function(){sizeHeader();showBtn()};