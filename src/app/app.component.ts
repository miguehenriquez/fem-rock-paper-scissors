import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-paper-scissors';
  showRules: boolean = false;
  score = 0;
  userChoice = '';
  houseChoice = '';
  choices = ['rock', 'paper', 'scissors'];

  toggleRulesModal() {
    this.showRules = !this.showRules;
  }

  setUserChoice(choice: string) {
    this.userChoice = choice;
    setTimeout(() => {
      this.houseChoice = this.choices[Math.floor(Math.random() * 3)];
    }, Math.ceil(Math.random() * 800) + 100);
  }
}
