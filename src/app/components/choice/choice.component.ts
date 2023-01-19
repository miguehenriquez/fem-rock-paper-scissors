import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
})
export class ChoiceComponent {
  @Input() stylesFrom = '';
  @Input() stylesTo = '';
  @Input() name = '';
  @Output() userChoice = new EventEmitter<string>();

  setUserChoice() {
    this.userChoice.emit(this.name);
  }
}
