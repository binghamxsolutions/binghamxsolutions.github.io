setInterval(timer, 1000);

function timer() {
	out = document.getElementById("timer");
	today = new Date();
	surprise = new Date("1 January 2025");//choose the next month at midnight
	//set the date for both test days
	
	remainingTime = surprise - today;
	days = remainingTime / 86400000;
	hours = (days % 1) * 24;
	minutes = (hours % 1) * 60;
	seconds = (minutes % 1) * 60;
	//calculates the remaining time to the surprise date
	
	fDays = String(Math.floor(days)).padStart(2, '0');
	fHours = String(Math.floor(hours)).padStart(2, '0');
	fMinutes = String(Math.floor(minutes)).padStart(2, '0');
	fSeconds = String(Math.floor(seconds)).padStart(2, '0');
	//format the time values to always have two number places

	out.innerHTML = fDays + "d " + fHours + "h " + fMinutes + "m " + fSeconds + "s";	
	//output the remaining time
}