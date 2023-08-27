let unsupportedMediaSize = window.matchMedia("(max-width: 239px)");
let mediaQueryTest = window.matchMedia("(max-width: 239px)");
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