import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { RecetasScreenComponent } from './recetas-screen/recetas-screen.component';
import { UsuariosScreenComponent } from './usuarios-screen/usuarios-screen.component';

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
    path: 'recetas',
    component: RecetasScreenComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
