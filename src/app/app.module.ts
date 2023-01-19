import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RulesModalComponent } from './components/rules-modal/rules-modal.component';
import { ChoiceComponent } from './components/choice/choice.component';

@NgModule({
  declarations: [
    AppComponent,
    RulesModalComponent,
    ChoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
