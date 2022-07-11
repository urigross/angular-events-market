import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { EventsHomeComponent } from './pages/events-home/events-home.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
