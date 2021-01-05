import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { cardlistcomponent } from './Components/cardlist.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MaterialModule } from './material/material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { HomescreenComponent } from './homescreen/homescreen.component';
import { TablaMedicosComponent } from './tabla-recetas/tabla-recetas.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RecetasScreenComponent } from './recetas-screen/recetas-screen.component';


import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AdministradorScreenComponent } from './administrador-screen/administrador-screen.component';
import { RecetaComponent } from './receta/receta.component';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    cardlistcomponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomescreenComponent,
    TablaMedicosComponent,
    RecetasScreenComponent,
    TablaUsuariosComponent,
    UsuariosComponent,
    AdministradorScreenComponent,
    RecetaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    NgbModule,
    MatTableModule,
    MatButtonModule,
    MatSortModule,
    MatPaginatorModule,
    MatInputModule,
    MatCheckboxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }