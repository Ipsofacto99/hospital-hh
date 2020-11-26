import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomescreenComponent } from './homescreen/homescreen.component'
import {  AppComponent } from './app.component'
import { TablaMedicosComponent } from './tabla-medicos/tabla-medicos.component';
const routes: Routes = [
 
  {
  path: 'inicio',
  component: HomescreenComponent,
},
{
  path: 'tablamedicos',
  component: TablaMedicosComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

