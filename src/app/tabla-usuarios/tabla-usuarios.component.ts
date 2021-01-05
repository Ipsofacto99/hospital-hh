import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario_medico, Usuario_tabla } from '../models/objects';
import { API_Service } from '../services/api-service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class TablaUsuariosComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = [
    'usuario',
    'nombre',
    'administrador',
    'medico',
    'medico_acesso_recetas',
    'responsable_sanitario',
    'mostrador_farmacia',
    'acciones',
  ];
  dataSource: MatTableDataSource<any>;

  data: Usuario_tabla[] = [];
  usuario: Usuario_medico;

  constructor(private httpClient: HttpClient) {}

  apiService: API_Service;

  async ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.apiService = new API_Service(this.httpClient);
    await this.apiService.start({ username: 'carrot', password: '1234' });
    this.apiService.obtenerUsuarios().subscribe((resp) => {
      resp.map((item) => {
        console.log(item);
        this.data.push({
          nombre: item.first_name + ' ' + item.last_name,
          id: item.id,
          usuario: item.username,
          administrador: '',
          medico: '',
          medico_acesso_recetas: '',
          mostrador_farmacia: '',
          responsable_sanitario: '',
        });
      });
      this.dataSource = new MatTableDataSource(this.data);
      this.AfterViewInit();
    });
  }

  AfterViewInit() {
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

  eliminar(id) {
    console.log(id);
  }

  agregarNuevo() {
    let med: Usuario_medico = {
      nombre: 'Paco',
      contrasenia: 'hola',
    };
    this.usuario = med;
    console.log(this.usuario);
  }
}
