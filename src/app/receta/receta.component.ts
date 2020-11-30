import { Component, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['./receta.component.scss', '../tabla-usuarios/tabla-usuarios.component.scss']
})
export class RecetaComponent implements OnInit {

  folio: String = '0910923';
  fecha: String = '29/11/2020 12:00 am'; 

  data: Medicamento[] = []
    
  displayedColumns = ["nombre", "clave", "presentacion", "empaque","cantidad","dosificacion", "dias", "viaAdministracion", "acciones"];
  dataSource: MatTableDataSource<any>;
  med: Medicamento;

  constructor() {}

  ngOnInit(): void{
    
  }

  agregar(){
    this.med = { nombre: "paco", clave: "29763", presentacion:"", empaque:"", cantidad: 1, dosificacion: "", dias: 12, viaAdministracion: "" };
    this.data.push(this.med);
    this.actTabla();
  }

  index
  quitar(nombre){
    for(let i=0; i<this.data.length; i++){
      if (this.data[i].nombre == nombre){
        this.index = i;
        break
      }
    }
    this.data.splice(this.index, 1);
    this.actTabla();
  }

  actTabla(){
    this.dataSource = new MatTableDataSource(this.data);
  }

  guardar(){

  }

  cancelar(){

  }

  pdf(){

  }
}

export interface Medicamento{
  nombre: string 
  clave: string
  presentacion: string
  empaque: string
  cantidad: Number
  dosificacion: string
  dias: number
  viaAdministracion: string
}