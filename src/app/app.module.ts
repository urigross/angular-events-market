import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './services/app-routing.module';
import { AppComponent } from './app.component';
import { EventsHomeComponent } from './pages/events-home/events-home.component';
import { EventsListComponent } from './components/events-list/events-list.component';
import { EventPreviewComponent } from './components/event-preview/event-preview.component';
import { HeaderComponent } from './components/header-components/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AboutComponent } from './pages/about/about.component';
import { DonateComponent } from './pages/donate/donate.component';
import { HeaderOpeningComponent } from './components/header-components/header-opening/header-opening.component';
import { FooterComponent } from './components/footer/footer.component';
import { CityFilterComponent } from './components/filters/city-filter/city-filter.component';



@NgModule({
  declarations: [
    AppComponent,
    EventsHomeComponent,
    EventsListComponent,
    EventPreviewComponent,
    HeaderComponent,
    AboutComponent,
    DonateComponent,
    HeaderOpeningComponent,
    FooterComponent,
    CityFilterComponent,
    
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
