import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { BusComponent } from './main/bus/bus.component';
import { MainComponent } from './main/main.component';
import { TourismComponent } from './main/tourism/tourism.component';

@NgModule({
  declarations: [AppComponent, TourismComponent, BusComponent, MainComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
