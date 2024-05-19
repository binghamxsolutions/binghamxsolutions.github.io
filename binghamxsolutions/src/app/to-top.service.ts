import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToTopService {
  isAtTop = false;

  constructor() { }

  getState() {
    return this.isAtTop;
  }

  checkPageHeight() {
    // var ngbtn = document.getElementsByTagName("app-to-top-button");
    
    if ((document.body.scrollTop > 30) || (document.documentElement.scrollTop > 30)) {
      this.isAtTop = true;
    } else {
      this.isAtTop = false;
    }
  }
}
