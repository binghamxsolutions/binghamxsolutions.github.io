let mobileDevice = window.matchMedia("(max-width: 479px)");
let tabletDevice = window.matchMedia("(min-width: 480px) and (max-width: 767px)");


function openMenu() {
	var menu = document.getElementsByTagName("header")[0];
	if(mobileDevice.matches) {
		menu.style.transform = "rotate3d(1, 0, 0, -90deg)";
	} else if (tabletDevice.matches) {
		menu.style.transform = "rotate3d(0, 1, 0, -90deg)";
	} else {
		menu.style.transform = "rotate3d(0, 1, 0, -90deg)";
	}
}
function closeMenu() {
	var menu = document.getElementsByTagName("header")[0];
	menu.style.transform = "none";
}

function changePhoto(x) {
	imgs = document.getElementsByClassName("product-img");
	img_info = imgs[x].getAttribute("src");
	photo = document.getElementById("p-img");
	
	photo.innerHTML = "<img src='" + img_info + "' alt='Product Image'>";
}
function resetPhotos() {
	document.getElementById("product-imgs").scrollTop = 0;
}
//window.onload = function() {changePhoto(0); resetPhotos();}