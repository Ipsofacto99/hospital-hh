import { HttpClient } from '@angular/common/http';
import { Component, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Usuario_tabla } from '../models/objects';
import { API_Service } from '../services/api-service';

@Component({
  selector: 'tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['../../assets/css/app-styles.scss'],
})
export class TablaUsuariosComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns = ['usuario', 'nombre', 'cargo', 'acciones'];
  dataSource: MatTableDataSource<any>;

  data: Usuario_tabla[] = [];
  apiService: API_Service;

  @Output() idUsuario: EventEmitter<number> = new EventEmitter<number>(); 
  @Output() isObservable: EventEmitter<boolean> = new EventEmitter<boolean>(); 

  constructor(private httpClient: HttpClient) {}

  async ngOnInit() {
    this.dataSource = new MatTableDataSource();
    this.apiService = new API_Service(this.httpClient);
    await this.apiService.start({ username: 'carrot', password: '1234' });
    this.apiService.getUsers().subscribe((resp) => {
      resp.map((item) => {
        this.data.push({
          nombre: item.first_name + ' ' + item.last_name,
          id: item.id,
          usuario: item.username,
          cargo: '',
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

  onEdit(id: number) {
    this.idUsuario.emit(id);
    this.isObservable.emit(true);
  }

  onDelete(id: number) {
    console.log(id);
  }

  addNew() {
    this.idUsuario.emit(null);
    this.isObservable.emit(true);
  }
}
