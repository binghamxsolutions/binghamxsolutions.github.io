let unsupportedMediaSize = window.matchMedia("(max-width: 239px)");
let mediaQueryTest = window.matchMedia("(max-width: 239px)");

function toTop() {
	btn = document.getElementsByClassName("to-top");

	if (btn.length != 0) {
		if ((document.body.scrollTop > 30) || (document.documentElement.scrollTop > 30)) {
			btn[0].style.display = "block";
		} else {
			btn[0].style.display = "none";

		}	
	}
}

window.addEventListener('scroll', toTop);

mediaQueryTest.addEventListener('change', event => {
	if(event.matches) {
		window.scrollTo({top: 0, left: 0, behavior: "instant"});
	}
});

window.onload = () => {
	if (unsupportedMediaSize.matches) {
		window.scrollTo({top: 0, left: 0, behavior: "instant"});
	}
};