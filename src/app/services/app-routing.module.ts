import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../pages/about/about.component';
import { DonateComponent } from '../pages/donate/donate.component';
import { EventsHomeComponent } from '../pages/events-home/events-home.component';

const routes: Routes = [
  {path:'', component: EventsHomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'donate', component: DonateComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
