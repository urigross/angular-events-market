import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { EventsHomeComponent } from './pages/events-home/events-home.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';
import { HeaderComponent } from './components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsHomeComponent,
    EventsListComponent,
    EventPreviewComponent,
    HeaderComponent,
    AboutComponent,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FontAwesomeModule
    
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
