import { Component } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.sass']
})
export class SamplesComponent {
  services = [
    {"id": "bCard", "name": "Business Cards"},
    {"id": "logos", "name": "Logos"},
    {"id": "flyer", "name": "Flyers"},
    {"id": "website", "name": "Websites"}
  ];
  currentSample = "bCard";
  
  constructor() { }

  showSample(className: string) {
    this.currentSample = className;

    var currentTab = document.getElementById(className);
    var tabs = document.getElementById('tabs')?.querySelectorAll("button");

    for (var i = 0; i < tabs!.length; i++) {
      tabs![i].style.width = "initial";
      tabs![i].style.zIndex = "initial";
      tabs![i].style.boxShadow = "none";
    }

    currentTab!.style.minWidth = "fit-content";
    currentTab!.style.zIndex = "5";
    currentTab!.style.boxShadow = "1px 0px 5px black"
  }
}
