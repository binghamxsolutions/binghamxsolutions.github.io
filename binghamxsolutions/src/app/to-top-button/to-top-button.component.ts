import { Component } from '@angular/core';

@Component({
  selector: 'app-to-top-button',
  templateUrl: './to-top-button.component.html',
  styleUrls: ['./to-top-button.component.sass']
})
export class ToTopButtonComponent {
  toTop() {
    document.documentElement.scrollTop = 0;  
  }
}