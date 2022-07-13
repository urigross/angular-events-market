import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { EventsHomeComponent } from './pages/events-home/events-home.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    EventsHomeComponent,
    EventsListComponent,
    EventPreviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
