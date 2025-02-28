let titles = [
    "Web Developer",
    "UI/UX Designer",
    "Creative Writer",
    "Photo Hobbyist",
    "Avid Learner",
    "Anime Nut",
    "Food Lover",
    "Moon Gazer",
    "Polyglot"
  ];

var title = "Web Developer";

/**
 * Loops through the `titles` array and outputs it to the DOM
 */
function showTitle() {
    var i = 1;

    title = titles[i];
    //sets the next title when called to reflect expected interval for the title change

    setInterval(() => {
      ++i;
      if(i == titles.length) {
        i = 0;
      }
      //increments the counter, then sets the value to 0 if it exceeds the `titles` array length

      title = titles[i];

	  document.getElementById('title').innerHTML = title;
    }, 2000);
  }

setTimeout(() => this.showTitle(), 2000);
//delays the call function so the page can load without issue

