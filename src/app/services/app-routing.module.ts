import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsHomeComponent } from '../pages/events-home/events-home.component';

const routes: Routes = [
  {path:'', component: EventsHomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
