import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ClientIntakeService } from '../client-intake.service';
import { ClientIntake } from '../client-intake';



@Component({
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
    {"id": 1, "value": "logo", "name": "Logo"},
    {"id": 2, "value": "bCard", "name": "Business Card"},
    {"id": 3, "value": "flyer", "name": "Flyer"},
    {"id": 4, "value": "website", "name": "Website"}
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
    services: <string | null>(null),
    notes: <string | null>(null),
    timeframe: <string | null>(null),
    budget: <number | null>(null)
  });

  serviceRequest = this.newIntakeForm.value;
  constructor(private formBuilder: FormBuilder, private clientIntakeService: ClientIntakeService) { }
  
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

  /***
   * Sets the intake values for the end user to review
   */
  reviewIntake():void {
    this.serviceRequest = this.newIntakeForm.value;
  }

  /***
   * Submits the intake form
   * @todo Add back-end processes for the intake submission to send via email
   */
  sendNewIntake():void {
    this.currentPos = 1;
    this.progress = 33.33;
    const user_name = this.serviceRequest.name;
    const email = this.serviceRequest.email;

    // if (user_name == null && email == null) {
    //   return "delay";
    // } else {
    //   return "pass";
    // }

    this.clientIntakeService.setIntake(this.newIntakeForm.value as ClientIntake);
  }
}
