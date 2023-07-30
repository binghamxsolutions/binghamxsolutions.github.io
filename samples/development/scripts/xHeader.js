function sizeHeader() {
	img = document.getElementById("logo");
	
	if ((document.body.scrollTop > 0) || (document.documentElement.scrollTop > 0)) {
		img.style.height = "50px";
	} else {
		img.style.height = "150px";
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