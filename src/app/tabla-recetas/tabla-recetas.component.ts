import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Receta_paciente, Medico, Receta } from '../models/objects';

@Component({
  selector: 'tabla-recetas',
  templateUrl: './tabla-recetas.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class TablaMedicosComponent {

  receta: Receta;

  user: Receta_paciente = {
    folio: 'Prueba',
    fecha: '11/14/97',
    medico: 'prueba',
    paciente: 'prueba',
  };
  data: Receta_paciente[] = [this.user];

  medico: Medico = {
    nombre: 'Prueba Prueba Prueba',
    universidad: 'Universidad',
    cedula: 'DNIDE092342',
    especialidad: 'Especialidad',
    id: null,
    turno: '',
    direccion: '',
  };

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'folio',
    'fecha',
    'medico',
    'paciente',
    'ver',
    'modificar',
  ];
  dataSource: MatTableDataSource<any>;

  constructor() {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
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

  editar(id) {
    console.log(id);
  }

  ver(id) {
    console.log(id);
  }
}
