import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
      { id: 2, nombre: 'Medico con acesso a todas las recetas', activo: false },
      { id: 3, nombre: 'Mostrador de farmacia', activo: false },
      { id: 4, nombre: 'Responsable sanitario', activo: false },
    ],
  };

  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    this.apiService = new API_Service(this.httpClient);
    await this.apiService.start({ username: 'carrot', password: '1234' });
    if (this.idUser != null) {
      this.apiService.getUserById(this.idUser).subscribe((resp) => {
        //console.log(resp);
        this.usuario = resp.username;
        this.nombre = resp.first_name + ' ' + resp.last_name;
        this.pwd = '';
        this.universidad = '';
        this.cedula = '';
        this.especialidad = '';
        this.direccion = '';
      });
    }
  }

  checkItem(item: number) {
    this.checkbox.data.forEach((element) => {
      if (element.id == item) {
        element.activo = true;
        console.log(element.activo);
      } else {
        element.activo = false;
        console.log(element.activo);
      }
    });
  }

  onSave() {
    this.isObservable.emit(false);
  }

  onCancel() {
    this.isObservable.emit(false);
  }
}
