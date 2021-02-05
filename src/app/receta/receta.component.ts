import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

import { Medicamento, Medico, Paciente, Receta } from '../models/objects';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class RecetaComponent implements OnInit {
  @Input() receta: Receta;
  @Input() editable: boolean;
  @Output() verReceta: EventEmitter<boolean> = new EventEmitter<boolean>();

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

  //Medicamentos

  formG: FormGroup;
  formM: FormGroup;

  constructor() {}

  ngOnInit() {
    let receta = this.receta;
    let medico = receta.medico;
    let paciente = receta.paciente;

    this.formG = new FormGroup({
      p_id: new FormControl({ value: paciente.id }, [Validators.required]),
      p_curp: new FormControl(
        { value: paciente.curp, disabled: !this.editable }, //datos paciente
        [Validators.required, Validators.minLength(18)]
      ),
      p_nombre: new FormControl(
        { value: paciente.nombre, disabled: !this.editable },
        [Validators.required]
      ),
      p_domicilio: new FormControl(
        { value: paciente.domicilio, disabled: !this.editable },
        [Validators.required]
      ),
      p_edad: new FormControl(
        { value: paciente.edad, disabled: !this.editable },
        [Validators.required]
      ),
      p_sexo: new FormControl(
        { value: paciente.sexo, disabled: !this.editable },
        [Validators.required]
      ),
      m_id: new FormControl(
        { value: medico.id, disabled: !this.editable }, //datos medico
        [Validators.required]
      ),
      m_cedula: new FormControl(
        { value: medico.cedula, disabled: !this.editable },
        [Validators.required]
      ),
      m_nombre: new FormControl(
        { value: medico.nombre, disabled: !this.editable },
        [Validators.required]
      ),
      m_especialidad: new FormControl(
        { value: medico.especialidad, disabled: !this.editable },
        [Validators.required]
      ),
      m_direccion: new FormControl(
        { value: medico.direccion, disabled: !this.editable },
        [Validators.required]
      ),
      m_universidad: new FormControl(
        { value: medico.universidad, disabled: !this.editable },
        [Validators.required]
      ),
      m_turno: new FormControl(
        { value: medico.turno, disabled: !this.editable },
        [Validators.required]
      ),
      diagnostico: new FormControl(
        { value: receta.diagnostico, disabled: !this.editable }, //datos receta
        [Validators.required]
      ),
      indicaciones: new FormControl(
        { value: receta.indicaciones, disabled: !this.editable },
        [Validators.required]
      ),
      id: new FormControl(
        { value: receta.indicaciones, disabled: !this.editable } //datos medicamentos
      ),
    });

    this.formM = new FormGroup({
      nombre: new FormControl({ value: '', disabled: !this.editable }),
      clave: new FormControl({ value: '', disabled: !this.editable }),
      presentacion: new FormControl({ value: '', disabled: !this.editable }),
      empaque: new FormControl({ value: '', disabled: !this.editable }),
      cantidad: new FormControl({ value: '', disabled: !this.editable }),
      dosificacion: new FormControl({ value: '', disabled: !this.editable }),
      dias: new FormControl({ value: '', disabled: !this.editable }),
      viaAdministracion: new FormControl({
        value: '',
        disabled: !this.editable,
      }),
    });

    if (receta.medicamentos.length > 0) {
      let idx = 0;
      receta.medicamentos.forEach((element) => {
        element.index = idx;
        idx++;
      });
    }

    this.updateTable();
  }

  addDrug() {
    let med: Medicamento;
    let idx: number;
    let { medicamentos } = this.receta;
    let controls = this.formM.controls;

    if (medicamentos.length < 1) idx = 0;
    else idx = medicamentos[medicamentos.length - 1].index + 1;

    med = {
      index: idx,
      nombre: controls.nombre.value,
      clave: controls.clave.value,
      presentacion: controls.presentacion.value,
      empaque: controls.empaque.value,
      cantidad: controls.cantidad.value,
      dosificacion: controls.dosificacion.value,
      dias: controls.dias.value,
      viaAdministracion: controls.viaAdministracion.value,
    };

    medicamentos.push(med);

    this.formM.reset();

    this.updateTable();
  }

  deleteDrug(index: number) {
    let idx: any;
    let { medicamentos } = this.receta;

    for (var i in medicamentos) {
      if (medicamentos[i].index == index) {
        idx = i;
      }
    }

    medicamentos.splice(idx, 1);
    this.updateTable();
  }

  updateTable() {
    this.dataSource = new MatTableDataSource(this.receta.medicamentos);
  }

  onSave() {
    if (this.formG.invalid) return;
    let controls = this.formG.controls;

    let paciente: Paciente = {
      id: controls.p_id.value,
      curp: controls.p_curp.value,
      nombre: controls.p_nombre.value,
      domicilio: controls.p_domicilio.value,
      edad: controls.p_edad.value,
      sexo: controls.p_sexo.value,
    };

    let medico: Medico = {
      id: controls.m_id.value,
      nombre: controls.m_nombre.value,
      especialidad: controls.m_especialidad.value,
      turno: controls.m_turno.value,
      universidad: controls.m_universidad.value,
      direccion: controls.m_direccion.value,
      cedula: controls.m_cedula.value,
    };

    this.receta.paciente = paciente;
    this.receta.medico = medico;

    this.onCancel();
  }

  pdf() {}

  onCancel() {
    this.verReceta.emit(false);
  }
}
