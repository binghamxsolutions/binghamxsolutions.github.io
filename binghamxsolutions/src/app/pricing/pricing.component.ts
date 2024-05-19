import { Component } from '@angular/core';

@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.sass']
})
export class PricingComponent {
  displayService = "bCard";

  services = [
    {"id": "bCard", "name": "Business Card", "price": 50, "description": "Need a tried and true way of getting clients for your services? Get a business card! Make it single or double-sided; standard shape, circle, or custom; and even pick the finish to appeal to your audience!"},
    {"id": "logo", "name": "Logo", "price": 49, "description": "Your business, no matter how small, is going to need a face. Why not make it a memorable one? A logo will help your customers (future and current) easily identify your business."},
    {"id": "flyer", "name": "Flyer", "price": 84, "description": "If you have an upcoming event and need a bunch of people to know about it, you should get a flyer. Make it a bi-fold , an accordion, or something else that will attract more people and get the necessary info out there!"},
    {"id": "website", "name": "Website", "price": 229, "description": "When people want more information these days, the first thing they usually do it check online. So why not give them a starting point for whatever it is you do? Your site, your words, your narrative - even if it's a simple 'hello'."}
  ];

  /**Checks if the service is currently chosen and should be displayed. */
  isDisplayed(testService:string):boolean {
    if(this.displayService == testService) {
      return true;
    } else {
      return false;
    }
  }

  /**Assigns selected service to the display name so it can be displayed to the user. */
  showPrice(serviceName: string) {
    this.displayService = serviceName;
  }
}
