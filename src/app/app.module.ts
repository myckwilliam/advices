import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceCardComponent } from './modules/components/advice-card/advice-card.component';
import { ButtonRandomComponent } from './modules/components/button-random/button-random.component';

@NgModule({
  declarations: [
    AppComponent,
    AdviceCardComponent,
    ButtonRandomComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
