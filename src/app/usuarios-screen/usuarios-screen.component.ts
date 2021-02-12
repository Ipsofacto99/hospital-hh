import { Component } from '@angular/core';

@Component({
  selector: 'usuarios-screen',
  templateUrl: './usuarios-screen.component.html',
  styleUrls: [],
})
export class UsuariosScreenComponent {
  idUser: number;
  observar: boolean = false;

  constructor() {}

  idUserOut(event: number) {
    this.idUser = event;
  }

  isObservable(event: boolean) {
    this.observar = event;
  }
}
