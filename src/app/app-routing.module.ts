import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomescreenComponent } from './homescreen/homescreen.component'
import {  AppComponent } from './app.component'
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
  path: 'inicio',
  component: HomescreenComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

