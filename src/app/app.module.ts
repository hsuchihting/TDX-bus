//* core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//* modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthInterceptor } from './auth/auth.interceptor';

//*components
import { BusComponent } from './main/bus/bus.component';
import { MainComponent } from './main/main.component';
import { TourismComponent } from './main/tourism/tourism.component';
import { TourFooterComponent } from './components/tour-footer/tour-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    TourismComponent,
    BusComponent,
    MainComponent,
    TourFooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
