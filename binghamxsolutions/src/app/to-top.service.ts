import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ToTopService {
  isAtTop = false;

  getState() {
    this.checkPageHeight();
    return this.isAtTop;
  }

  checkPageHeight() {
    if (document.documentElement.scrollTop > 5) {
      this.isAtTop = true;
    } else {
      this.isAtTop = false;
    }
  }
}
