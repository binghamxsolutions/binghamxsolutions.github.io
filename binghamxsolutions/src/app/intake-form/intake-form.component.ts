import { Component } from '@angular/core';
import {FormControl, ReactiveFormsModule} from '@angular/forms';



@Component({
  //standalone: true,
  template: 'First Name: <input type="text" [formControl]="intakeFormControl"',
  selector: 'app-intake-form',
  templateUrl: './intake-form.component.html',
  styleUrls: ['./intake-form.component.sass']
})
export class IntakeFormComponent {
  intakeFormControl = new FormControl('');

}
