import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-card',
  templateUrl: './contact-card.component.html',
  styleUrls: ['./contact-card.component.sass']
})
export class ContactCardComponent {
  formOpen = false;
  titles = [
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
  title = "Web Developer";

  constructor() { 
    setTimeout(() => this.showTitle(), 2000) 
    //delays the call function so the page can load without issue
  }
  
  showForm() {
    if (this.formOpen = false) {
      this.formOpen = true;
    } else {
      this.formOpen = false;
    }
  }

  /**Sets a new title every 2s and loops the values */
  showTitle() {
    var i = 1;

    this.title = this.titles[i];
    //sets the next title when called to reflect expected interval for the title change

    setInterval(() => {
      ++i;
      if(i == this.titles.length) {
        i = 0;
      }
      //increments the counter, then sets the value to 0 if it exceeds the `titles` array length

      this.title = this.titles[i];
    }, 2000);
  }
}
