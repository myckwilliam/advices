import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AdviceCardComponent } from './modules/components/advice-card/advice-card.component';
import { ButtonRandomComponent } from './modules/components/button-random/button-random.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@NgModule({
  declarations: [AppComponent, AdviceCardComponent, ButtonRandomComponent],
  imports: [BrowserModule, HttpClientModule, NgxSkeletonLoaderModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
