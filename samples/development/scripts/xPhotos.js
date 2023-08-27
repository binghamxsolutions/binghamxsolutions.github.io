function changePhoto(x) {
	imgs = document.getElementsByClassName("product-img");
	img_info = imgs[x].getAttribute("src");
	photo = document.getElementById("p-img");
	
	photo.innerHTML = "<img src='" + img_info + "' alt='Product Image'>";
}
function resetPhotos() {
	document.getElementById("product-imgs").scrollTop = 0;
}

window.onload = () => {changePhoto(0); resetPhotos();};