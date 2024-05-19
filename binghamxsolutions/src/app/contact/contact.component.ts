import { Component } from '@angular/core';
import { ClientIntakeService } from '../client-intake.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  submissionStatus?: boolean;
  status = '';
  message = '';

  submission = [
    {"status": "success", "feedback": "Thanks! You'll get an email shortly confirming we've received your request. \n\nPlease give us 24-48 business hours to respond."},
    {"status": "error", "feedback": "There was an issue submitting your service request. Please try again later."},
    {"status": "null", "feedback": "Thanks for your interest, but without an email, we will not be able to contact you!"}
  ];

  constructor (private clientIntakeService: ClientIntakeService) { }

  checkSubmissionStatus() {
    this.submissionStatus = this.clientIntakeService.getStatus();
  }

  outputMessage():void {
    this.submission.forEach(response => {
      if (this.clientIntakeService.status == response.status) {
        this.message = response.feedback;
      }
    });
    /*
    if (user_name == null && email == null) {
      this.userMsg = UserMessage.NoEmail;
    } else {
      this.userMsg = UserMessage.NoIssue;
    }
    */
  }
}
