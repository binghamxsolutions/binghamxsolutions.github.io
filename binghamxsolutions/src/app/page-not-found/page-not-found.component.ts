import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.sass']
})
export class PageNotFoundComponent {
  links = [
    {"url": "/", "name": "Home" },
    {"url": "/samples", "name": "Samples" },
    {"url": "/pricing", "name": "Pricing" },
    {"url": "/contact", "name": "Contact" }
  ];
}
