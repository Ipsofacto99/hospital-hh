import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'tabla-medicos',
  templateUrl: './tabla-medicos.component.html',
  styleUrls: ['./tabla-medicos.component.css', '../tabla-usuarios/tabla-usuarios.component.scss']
})
export class TablaMedicosComponent  {

    user: Prueba = { folio: "Prueba", fecha: "11/14/97", medico: "prueba", paciente: "prueba"};
    user2: Prueba =  { folio: "Prueba2", fecha: "11/12/12", medico: "prueba2", paciente: "prueba2"};
    data: Prueba[] = [this.user, this.user2]; 
  
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    
    displayedColumns = ["folio", "fecha", "medico", "paciente","ver","modificar"];
    dataSource: MatTableDataSource<any>;
    usuario: string = "Usuario Prueba";
    titulo: string = "Centenario Hospital Miguel Hidalgo";
    btn: string = "Generar Nueva Receta";
  
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
  
    agregarReceta(){
      console.log("nuevo")
    }
  
  }
  
  export interface Prueba{
    folio: string 
    fecha: string
    medico: string
    paciente: string

  }
  
