import { Component, OnInit } from '@angular/core';
import {Validators, FormBuilder, FormArray, FormControlName} from '@angular/forms';



@Component({
  //standalone: true,
  //template: 'First Name: <input type="text" [formControl]="intakeFormControl"',
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.sass']
})

export class IntakeFormComponent {
  dateLimitation = new Date().toISOString().split('T')[0];
  currentPos = 1;
  progress = 33.33;
  emailRegex = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  timeframes = [
    {"timeframe": "Morning", "description": "Morning (9 am to 11 am ET)"},
    {"timeframe": "Afternoon", "description": "Afternoon (12 pm to 3 pm ET)"},
    {"timeframe": "Evening", "description": "Evening (4pm to 6pm ET)"}
  ];
  services = [
    {"id": 1, "value": "logo", "name": "Logo", "selected": false},
    {"id": 2, "value": "business-card", "name": "Business Card", "selected": false},
    {"id": 3, "value": "flyer", "name": "Flyer", "selected": false},
    {"id": 4, "value": "website", "name": "Website", "selected": false}
  ];
  reasons = [
    {"id": "personal-reason", "value": "Personal", "label": "Personal Use"},
    {"id": "business-reason", "value": "Business", "label": "Business"},
  ];
  serviceList: string[] = [];
  userMsg = '';

  newIntakeForm = this.formBuilder.group({
    name: <string | null>(null),
    email: [<string | null>(null), Validators.pattern(this.emailRegex)],
    reason: <string | null>(null),
    business_name: <string | null>(null),
    services: new FormArray([]),
    notes: <string | null>(null),
    date: <Date | null | string>(null),
    timeframe: <string | null>(null)
  });

  serviceRequest = this.newIntakeForm.value;
  constructor(private formBuilder: FormBuilder) { }
  
  /**
   * Sets the current stage in a multi-step form.
   * @param position
   */
  setStage(position: number):number {
    this.currentPos += position;

    if (this.currentPos < 4) {
      this.progress = 33.33 * this.currentPos;
    } else {
      this.reviewIntake();
    }
    return this.currentPos;
  }

  /**
   * Identifies if the 'Business' reason was selected to apply further form logic.
   */
  isBusiness():boolean {
    if (this.newIntakeForm.controls.reason.value == 'Business') {
      return true
    } else {
      this.newIntakeForm.controls.business_name.setValue(null);
      return false
    }
  }

  /**
   * Toggles the boolean value passed to it.
   * @param selected 
   * @returns boolean
   */
  toggleSelection(selected: boolean):boolean {
    if(selected == false) {
      return true;
    }
    return false;
  }

  /**
   * 
   * @param service 
   */
  toggleService(service: string):void {
    if (this.serviceList.length == 0 || !this.serviceList.includes(service)) {
      this.serviceList.push(service);      
    } else {
      this.serviceList.forEach((item, index) => {
        if(item === service) this.serviceList.splice(index,1)
      });
    }

    /*
    if(selected == true) {
      this.serviceList.push(service);
    } else {
      this.serviceList.forEach((item, index) => {
        if(item === service) this.serviceList.splice(index,1);
      });
      //array removal code found on StackOverflow: https://stackoverflow.com/questions/15292278/how-do-i-remove-an-array-item-in-typescript  
    }

    this.services.forEach((item, index) => {
      if(item.name === service) {
        this.services.at(index)?.selected == selected;
        console.log(this.services.at(index));
        serviceItem.checked = selected;
      }
    });*/
  }

  /***
   * Sets the intake values for the end user to review
   */
  reviewIntake():void {
    //this.newIntakeForm.controls.services.setValue(this.serviceList);
    this.serviceRequest = this.newIntakeForm.value;
    console.log(this.serviceRequest);
  }

  /***
   * Submits the intake form
   * @todo Add back-end processes for the intake submission to send via email
   */
  sendNewIntake() {
    this.currentPos = 1;
    this.progress = 33.33;
    const user_name = this.serviceRequest.name;
    const email = this.serviceRequest.email;

    if (user_name == null && email == null) {
      return "delay";
    } else {
      return "pass";
    }
  }
}
