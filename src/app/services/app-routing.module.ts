import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { EventsHomeComponent } from '../pages/events-home/events-home.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent},
  {path:'', component: EventsHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
