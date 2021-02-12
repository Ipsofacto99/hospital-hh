import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  MinLengthValidator,
  Validators,
} from '@angular/forms';
import { API_Service } from '../services/api-service';

@Component({
  selector: 'usuario',
  templateUrl: './usuarios.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class UsuariosComponent implements OnInit {
  apiService: API_Service;

  @Input() idUser: number;
  @Output() isObservable: EventEmitter<boolean> = new EventEmitter<boolean>();

  nombre: string;
  usuario: string;
  pwd: string;
  especialidad: string;
  cedula: string;
  universidad: string;
  direccion: string;

  checkbox = {
    data: [
      { id: 0, nombre: 'Administrador', activo: false },
      { id: 1, nombre: 'Médico', activo: false },
      { id: 2, nombre: 'Médico con acesso a todas las recetas', activo: false },
      { id: 3, nombre: 'Mostrador de farmacia', activo: false },
      { id: 4, nombre: 'Responsable sanitario', activo: false },
    ],
  };

  formG: FormGroup;

  constructor(private httpClient: HttpClient) {
    this.formG = new FormGroup({
      usuario: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      pwd: new FormControl('', [Validators.required, Validators.minLength(6)]),
      m_id: new FormControl('', [Validators.required]),
      m_cedula: new FormControl('', [Validators.required]),
      m_nombre: new FormControl('', [Validators.required]),
      m_especialidad: new FormControl('', [Validators.required]),
      m_direccion: new FormControl('', [Validators.required]),
      m_universidad: new FormControl('', [Validators.required]),
      m_turno: new FormControl('', [Validators.required]),
    });
  }

  async ngOnInit() {
    this.apiService = new API_Service(this.httpClient);
    await this.apiService.start({ username: 'carrot', password: '1234' });
    if (this.idUser != null) {
      this.apiService.getUserById(this.idUser).subscribe((resp) => {
        let nombre = resp.first_name + ' ' + resp.last_name;
        this.formG.setValue({
          usuario: resp.username,
          pwd: resp.hash,
          m_id: resp.id,
          m_cedula: '',
          m_nombre: nombre,
          m_especialidad: '',
          m_direccion: '',
          m_universidad: '',
          m_turno: '',
        });
      });
    }
  }

  medActive = false;
  pref = "checkbox";
  checkItem(id: number) {
    let item = <HTMLInputElement>document.getElementById('checkbox' + id);
    if (item == null) return;
    if (item.checked) this.checkbox.data[id].activo = true;
    else this.checkbox.data[id].activo = false;

    this.medActive = false;
    this.checkbox.data.map((element) => {
      if (element.activo && element.nombre.includes('Médico')) {
        this.medActive = true;
      }
    });
  }

  onSave() {
    if (this.formG.invalid) return;
    this.isObservable.emit(false);
  }

  onCancel() {
    this.isObservable.emit(false);
  }

  visibility: boolean = false;
  type: string = 'password';
  showPwd() {
    this.visibility = !this.visibility;
    if (this.visibility) {
      this.type = 'text';
    } else {
      this.type = 'password';
    }
  }
}
