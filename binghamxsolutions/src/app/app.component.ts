import { Component } from '@angular/core';
import { ToTopService } from './to-top.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  pageAtTop?: boolean;

  constructor(private toTopService: ToTopService) { 
    window.addEventListener('scroll', () => {
      this.pageAtTop = this.toTopService.getState();
    }); 
  }
}
