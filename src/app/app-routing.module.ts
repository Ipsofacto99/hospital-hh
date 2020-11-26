import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {  HomescreenComponent } from './homescreen/homescreen.component'
import {  AppComponent } from './app.component'
import { TablaMedicosComponent } from './tabla-medicos/tabla-medicos.component';
import { MedicosScreenComponent } from './medicos-screen/medicos-screen.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
 
  {
  path: 'inicio',
  component: HomescreenComponent,
},
{
  path: 'tablamedicos',
  component: MedicosScreenComponent
}

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

