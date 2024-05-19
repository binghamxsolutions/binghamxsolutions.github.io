import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  services = [
    {"id": "bCard", "name": "Business Cards"},
    {"id": "logo", "name": "Logos"},
    {"id": "flyer", "name": "Flyers"},
    {"id": "website", "name": "Websites"}
  ];
  currentSample = "";

  constructor() { this.showSample("bCard") }

  showSample(className: string) {
    this.currentSample = className;
  }

  // colorHeader() {
  //   var header = document.getElementsByTagName("header")[0];
    
  //   if ((document.body.scrollTop > 15) || (document.documentElement.scrollTop > 15)) {
  //     header.style.backgroundColor = "var(--darkPurple)";
  //     header.style.boxShadow = "0px 0px 3px #000";

  //   } else {
  //     header.style.backgroundColor = "transparent";
  //     header.style.boxShadow = "none";

  //   }

  //   console.log("scrolling!");
  // }
}
