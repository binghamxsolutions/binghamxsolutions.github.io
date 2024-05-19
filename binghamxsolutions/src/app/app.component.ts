import { Component } from '@angular/core';
import { ToTopService } from './to-top.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pageAtTop?: boolean;

  constructor(private toTopService: ToTopService) { this.checkStatus() }

  checkStatus() {
    this.pageAtTop = this.toTopService.getState();
  }
}
