import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-emailInput',
  templateUrl: './emailInput.component.html',
  styleUrls: ['./emailInput.component.scss']
})
export class EmailInputComponent {
  @Input() email: string;

  @Output() emailChanged: EventEmitter<string> = new EventEmitter();

  @Output() emailValid: EventEmitter<boolean> = new EventEmitter();
 
  emailChange(valid) {
    this.emailValid.emit(valid);
    this.emailChanged.emit(this.email);
  }
}
