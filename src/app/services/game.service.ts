import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private userChoice = '';
  private computerChoice = '';
  constructor() {}

  setUserChoice(choice: string) {
    this.userChoice = choice;
  }

  getUserChoice() {
    return this.userChoice;
  }
}
