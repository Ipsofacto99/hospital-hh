import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['../tabla-usuarios/tabla-usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {

  usuario: string = "Usuario Prueba";
  titulo: string = "Centenario Hospital Miguel Hidalgo";

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    
  }

  cancelar(){

  }

}
