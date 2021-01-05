import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

import { Medicamento, Medico, Paciente, Receta } from '../models/objects';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class RecetaComponent implements OnInit {
  @Input() receta: Receta;

  displayedColumns = [
    'nombre',
    'clave',
    'presentacion',
    'empaque',
    'cantidad',
    'dosificacion',
    'dias',
    'viaAdministracion',
    'acciones',
  ];
  dataSource: MatTableDataSource<any>;

  constructor() {
    if (this.receta == null) {
      this.receta = new Receta();
      let fecha = new Date();
      this.receta.fecha = fecha.toLocaleString();
      this.receta.folio = '00';
      this.receta.medicamentos = [];
      this.receta.indicaciones = '';
      this.receta.diagnostico = '';
    } else {
    }
  }

  ngOnInit() {}

  //Receta

  //Paciente
  @Input() p_curp: string;
  @Input() p_nombre: string;
  @Input() p_domicilio: string;
  @Input() p_edad: number;
  @Input() p_sexo: string;

  //Medico
  @Input() m_cedula: string;
  @Input() m_nombre: string;
  @Input() m_especialidad: string;
  @Input() m_direccion: string;
  @Input() m_universidad: string;
  @Input() m_turno: string;

  @Input() diagnostico: string;
  @Input() indicaciones: string;

  //Medicamentos
  @Input() nombre: string;
  @Input() clave: string;
  @Input() presentacion: string;
  @Input() empaque: string;
  @Input() cantidad: number;
  @Input() dosificacion: string;
  @Input() dias: number;
  @Input() viaAdministracion: string;

  agregar() {
    let med: Medicamento;
    let idx: number;
    let { medicamentos } = this.receta;

    if (medicamentos.length < 1) idx = 0;
    else idx = medicamentos[medicamentos.length - 1].index + 1;

    med = {
      index: idx,
      nombre: this.nombre,
      clave: this.clave,
      presentacion: this.presentacion,
      empaque: this.empaque,
      cantidad: this.cantidad,
      dosificacion: this.dosificacion,
      dias: this.dias,
      viaAdministracion: this.viaAdministracion,
    };

    medicamentos.push(med);
    this.actualizarTablaMed();
  }

  quitar(index: number) {
    let idx: any;
    let { medicamentos } = this.receta;

    for (var i in medicamentos) {
      if (medicamentos[i].index == index) {
        idx = i;
      }
    }

    medicamentos.splice(idx, 1);
    this.actualizarTablaMed();
  }

  actualizarTablaMed() {
    this.dataSource = new MatTableDataSource(this.receta.medicamentos);
  }

  guardar() {
    console.log(this.receta);
  }

  pdf() {}
}
