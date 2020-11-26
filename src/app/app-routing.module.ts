import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component'
import { AppComponent } from './app.component'
import { TablaMedicosComponent } from './tabla-medicos/tabla-medicos.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
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
  path: 'tabla-medicos',
  component: MedicosScreenComponent
},
{
  path: 'tabla-usuarios',
  component: TablaUsuariosComponent
},
{
  path: 'usuario',
  component: UsuariosComponent
}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

