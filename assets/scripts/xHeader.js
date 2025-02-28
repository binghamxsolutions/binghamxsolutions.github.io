function colorHeader() {
	header = document.getElementsByTagName("header")[0];
	
	if ((document.body.scrollTop > 15) || (document.documentElement.scrollTop > 15)) {
		header.style.backgroundColor = "#433a3a";
		header.style.boxShadow = "0px 0px 3px #000";
	} else {
		header.style.backgroundColor = "transparent";
		header.style.boxShadow = "none";
	}
}

window.onscroll = () => {colorHeader();}