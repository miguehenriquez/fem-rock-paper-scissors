import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-paper-scissors';
  showRules: boolean = false;
  score = 0;

  toggleRulesModal() {
    this.showRules = !this.showRules;
  }
}
