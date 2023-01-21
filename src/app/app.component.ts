import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-paper-scissors';
  showRules: boolean = false;
  score = 0;
  readonly PAPER = 'paper';
  readonly SCISSORS = 'scissors';
  readonly ROCK = 'rock';
  userChoice = '';
  houseChoice = '';
  choices = [this.ROCK, this.PAPER, this.SCISSORS];
  resultMessage = '';

  toggleRulesModal() {
    this.showRules = !this.showRules;
  }

  setUserChoice(choice: string) {
    this.userChoice = choice;
    // setTimeout(() => {
    this.houseChoice = this.choices[Math.floor(Math.random() * 3)];
    this.resultMessage = this.gameResult(this.userChoice, this.houseChoice);
    // }, Math.ceil(Math.random() * 400) + 100);
  }

  reset() {
    this.userChoice = '';
    this.houseChoice = '';
    this.resultMessage = '';
  }

  gameResult(userChoice: string, houseChoice: string) {
    const userWins = this.winsAgainst(userChoice) === houseChoice;
    const computerWins = this.winsAgainst(houseChoice) === userChoice;
    let message = "it's a tie";
    if (userWins) {
      message = 'you win';
      ++this.score;
    } else if (computerWins) {
      message = 'you lose';
      --this.score;
    }
    return message;
  }

  winsAgainst(choice: string) {
    switch (choice) {
      case this.PAPER:
        return this.ROCK;
      case this.ROCK:
        return this.SCISSORS;
      default:
        return this.PAPER;
    }
  }
}
