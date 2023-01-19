import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'rock-paper-scissors';
  showRules: boolean = false;

  toggleRulesModal() {
    this.showRules = !this.showRules;
    // console.log(this.showRules);
  }
}
