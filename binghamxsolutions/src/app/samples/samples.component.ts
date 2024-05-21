import { Component } from '@angular/core';

@Component({
  selector: 'app-samples',
  templateUrl: './samples.component.html',
  styleUrls: ['./samples.component.sass']
})
export class SamplesComponent {
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
}
