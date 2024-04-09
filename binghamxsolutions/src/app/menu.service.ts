import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  state = false;

  constructor() { }

  getState(): boolean {
    return this.state;
  }

  modifyState(): void {
    if (this.state == false) {
      this.state = true;
    } else {
      this.state = false;
    }
  }
}
