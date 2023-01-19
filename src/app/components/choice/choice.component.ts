import { Component, Input } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
})
export class ChoiceComponent {
  @Input() stylesFrom = '';
  @Input() stylesTo = '';
  @Input() name = '';

  constructor(private gameService: GameService) {}

  setUserChoice() {
    this.gameService.setUserChoice(this.name);
    console.log(this.gameService.getUserChoice());
  }
}
