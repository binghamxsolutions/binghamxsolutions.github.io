function openMenu() {
	document.getElementById("sub-menu").style.display = "flex";
}
function closeMenu() {
	document.getElementById("sub-menu").style.display = "none";
}
function openPhoto(x) {
	pic = document.getElementById(x);
	pic.style.display = "grid";
}
function closePhoto(x) {
	pic = document.getElementById(x);
	pic.style.display = "none";
}