import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGoogleAnalyticsModule.forRoot('G-WNR5S8CYDH'),
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
