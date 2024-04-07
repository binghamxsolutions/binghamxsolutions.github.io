import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent {
  submitted = false;
  status = '';

  outputMessage():void {
    enum UserMessage {
      NoEmail = "Thanks for your interest, but without an email, we will not be able to contact you!",
      NoIssue = "Thanks! You'll get an email shortly confirming we've received your request. \n\nPlease give us 24-48 business hours to respond.",
      Error = "There was an issue submitting your service request. Please try again later."
    };

    /*
    if (user_name == null && email == null) {
      this.userMsg = UserMessage.NoEmail;
    } else {
      this.userMsg = UserMessage.NoIssue;
    }
    */
  }

}
