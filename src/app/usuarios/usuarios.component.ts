import { Component, Input, OnInit } from '@angular/core';
import { Usuario_medico } from '../models/objects';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['../../assets/css/app-styles.scss']
})
export class UsuariosComponent implements OnInit {

  @Input() user: Usuario_medico;

  constructor() { 
  }

  ngOnInit(): void {

  }

  guardar(){
    
  }
}
