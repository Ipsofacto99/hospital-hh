import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { RecetasScreenComponent } from './recetas-screen/recetas-screen.component';
import { AdministradorScreenComponent } from './administrador-screen/administrador-screen.component';
import { RecetaComponent } from './receta/receta.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'inicio',
    component: HomescreenComponent,
  },
  {
    path: 'tabla-recetas',
    component: RecetasScreenComponent,
  },
  {
    path: 'receta',
    component: RecetaComponent,
  },
  {
    path: 'administrador',
    component: AdministradorScreenComponent,
    children: [
      {
        path: 'tabla-usuarios',
        component: TablaUsuariosComponent,
      },
      {
        path: 'usuario',
        component: UsuariosComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
