import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.sass', '../../styles.sass']
})
export class FooterComponent {
  year?: number;

  constructor() { this.getYear() }

  getYear() {
    this.year = new Date().getFullYear();
  }
}
