import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import {
  Receta_paciente,
  Medico,
  Receta,
  Medicamento,
  Paciente,
} from '../models/objects';

@Component({
  selector: 'tabla-recetas',
  templateUrl: './tabla-recetas.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class TablaMedicosComponent {
  data: Receta_paciente[] = [];

  medico: Medico = {
    nombre: 'Prueba Prueba Prueba',
    universidad: 'Universidad',
    cedula: 'DNIDE092342',
    especialidad: 'Especialidad',
    id: 1,
    turno: 'A3',
    direccion: 'C34',
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

  receta: Receta;
  @Output() verReceta: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() editarReceta: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() recetaOut: EventEmitter<Receta> = new EventEmitter<Receta>();

  constructor() {
    let user: Receta_paciente = {
      folio: "6969",
      fecha: '5/3/2021 12:34:21',
      medico: this.medico.nombre,
      paciente: '',
    };

    this.data.push(user);
  }

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

  editar(id: number) {
    this.receta = new Receta();
    this.receta.fecha = '5/3/2021 12:34:21';
    this.receta.folio = '6969';
    this.receta.medicamentos = [];

    this.receta.indicaciones = 'Indicaciones de Prueba';
    this.receta.diagnostico = 'Diagnostico Prueba';
    this.receta.medico = this.medico;
    this.receta.paciente = {
      id: 1,
      domicilio: "Rep #324 LS SD",
      nombre: "Paciente 1",
      edad: 12,
      sexo: "Masculino",
      curp: "DEIWH08324D"
    }

    this.editarReceta.emit(true);
    this.verReceta.emit(true);
    this.recetaOut.emit(this.receta);
  }

  ver(id: number) {
    this.receta = new Receta();
    this.receta.fecha = '5/3/2021 12:34:21';
    this.receta.folio = '6969';
    this.receta.medicamentos = [];

    this.receta.indicaciones = 'Indicaciones de Prueba';
    this.receta.diagnostico = 'Diagnostico Prueba';
    this.receta.medico = this.medico;
    this.receta.paciente = {
      id: 1,
      domicilio: "Rep #324 LS SD",
      nombre: "Paciente 1",
      edad: 12,
      sexo: "Masculino",
      curp: "DEIWH08324D"
    }

    this.editarReceta.emit(false);
    this.verReceta.emit(true);
    this.recetaOut.emit(this.receta);
  }

  agregarReceta() {
    let receta = new Receta();
    let fecha = new Date();
    receta.fecha = fecha.toLocaleString();
    receta.folio = '00';
    let medicamentos: Medicamento[] = [];
    receta.medicamentos = medicamentos;
    receta.medico = this.medico;
    
    receta.paciente = {
      id: null,
      curp: '',
      nombre: '',
      domicilio: '',
      sexo: '',
      edad: null
    };

    this.editarReceta.emit(true);
    this.verReceta.emit(true);
    this.recetaOut.emit(receta);
  }
}
