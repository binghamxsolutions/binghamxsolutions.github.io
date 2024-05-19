import { Injectable } from '@angular/core';
import { ClientIntake } from './client-intake';

@Injectable({
  providedIn: 'root'
})
export class ClientIntakeService {
  public status = "";
  public isSubmitted = true;
  
  constructor() { }

  getIntake() { 
    //TODO create a function to retrieve the intake 
  }

  getStatus():boolean {
    return this.isSubmitted;
  }

  setIntake(clientIntake: ClientIntake):void {
    //TODO create a function to store the intake 
  }

  sendIntake() {
    // if (11) {
    //   this.status = "null";
    // } else if (this.isSubmitted /* set html header == 200 for ok status */) {
    //   this.status = "success";
    // } else {
    //   this.status = "error";
    // }
  }
}
