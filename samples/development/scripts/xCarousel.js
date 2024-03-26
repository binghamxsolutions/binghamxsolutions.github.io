let msg_field;
let smallScreenMediaSize = window.matchMedia("(min-width: 240px) and (max-width: 359px)");
let mobileMediaSize = window.matchMedia("(min-width: 360px) and (max-width: 479px)");

function carousel() {
	faces = document.getElementsByClassName("brand");
	num = faces.length;

	rotBasis = 360/num; //calculates external angles based on num sides
	rel = 200 / rotBasis; //ids the relationship bw the width and the external angle
	est = Math.round(rel); //rounds the relationship value
	halfPt = 100 * est; //calculates the approx offset value based on the radius
	mod = (rel % 2) * 10; //calculates the approx variance based on the relational remainder
	translate = halfPt + mod; //sets final offset value

	if (!smallScreenMediaSize.matches || !mobileMediaSize.matches) { //only initiates the carousel if the device is a tablet/desktop
		for (i = 0; i < num; i++) {
			theta = rotBasis * i;
			faces[i].style.transform = "rotate3d(0,1,0," + theta + "deg) translateZ(" + translate+ "100px)";
		}	
		
	}
}

function openFbk() {
	form = document.getElementById("form");
	feedback = document.getElementById("feedback");
	form = document.getElementById("form");
	form.style.visibility = "visible";
	
	width = window.getComputedStyle(form).getPropertyValue("width");
	if(smallScreenMediaSize.matches || mobileMediaSize.matches) {
	} else {
		feedback.style.right = 0;
	}
}
function closeFbk() {
	form = document.getElementById("form");
	feedback = document.getElementById("feedback");
	form = document.getElementById("form");
	form.style.visibility = "hidden";
	selection = document.getElementsByName("rating");
	response = document.getElementById("response");
	
	for(i = 0; i < selection.length; i++) {
		selection[i].checked = false; 
	}
	response.value = "";
	
	if(smallScreenMediaSize.matches || mobileMediaSize.matches) {
	} else {
		width = window.getComputedStyle(form).getPropertyValue("width");
		feedback.style.right = "-" + width;
	}
}

function closeChat(){
	chat_win = document.getElementById("chat-form");
	chat_win.style.visibility = "hidden";
}
function openChat() {
	chat_win = document.getElementById("chat-form");
	chat_win.style.visibility = "visible";	
}
function postMsg() {
	msg = document.getElementById("message");
	msg_thread = document.getElementById("body");
	msg_content = msg.value;
	msg.value = "";
	if (msg_content) {
		bot_response = "<p class='bot'>Sorry! I am not programmed to respond.</p>";
		user_response = "<p class='user'>" + msg_content +"</p>";
		
		
		msg_thread.innerHTML += user_response + "<div class='timestamp user'>" + new Date() + "</div>";
		thread_bottom = msg_thread.scrollHeight;
		msg_thread.scrollTo(0, thread_bottom);

		setTimeout(() => {
			msg_thread.innerHTML += bot_response + "<div class='timestamp bot'>" + new Date() + "</div>";
			msg_thread.scrollTo(0, thread_bottom);			
		}, 2000);
	}
}
function activate() {
	msg_field = document.getElementById("message");
	 msg_field.addEventListener("keypress", function(e) {
		 if ((e.key === "Enter") && (document.activeElement.id === "message")) {
			 postMsg();
		 }
	 });
 }
window.onload = function() {carousel(); closeFbk(); activate();}
 //check for focus with doc active elemtn