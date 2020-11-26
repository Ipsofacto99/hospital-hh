import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.scss','../usuarios/usuarios.component.css']
})
export class TablaUsuariosComponent implements AfterViewInit {

  user: Prueba = { nombre: "Prueba", id: 1, usuario: "prueba", administrador: "prueba", medico: "prueba", medico_acesso_recetas: "prueba", responsable_sanitario: "prueba", mostrador_farmacia: "prueba" };
  user2: Prueba =  { nombre: "Prueba2", id: 1, usuario: "prueba2", administrador: "prueba", medico: "prueba", medico_acesso_recetas: "prueba", responsable_sanitario: "prueba", mostrador_farmacia: "prueba" };
  data: Prueba[] = [this.user, this.user2] 

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  displayedColumns = ["usuario", "nombre", "administrador", "medico", "medico_acesso_recetas", "responsable_sanitario", "mostrador_farmacia", "acciones"];
  dataSource: MatTableDataSource<any>;
  usuario: string = "Usuario Prueba";
  titulo: string = "Centenario Hospital Miguel Hidalgo";
  btn: string = "Agregar Nuevo Usuario";

  constructor(){}

  ngOnInit(): void{
    for (var i=0; i<12; i++){
      this.data.push(this.user)
    }
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editar(id){
    console.log(id)
  }

  eliminar(id){
    console.log(id)
  }

  agregarNuevo(){
    console.log("nuevo")
  }

}

export interface Prueba{
  nombre: string 
  id: number
  usuario: string
  administrador: string
  medico: string
  medico_acesso_recetas: string
  responsable_sanitario: string
  mostrador_farmacia: string
}
