import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user;
  title = 'hospital-hh';
  items = ['Usuario', 'Contraseña', 'Nombre']

  addItem(){
    this.items.push('nuevo item')
  }

  getId(id: string){
    this.user = id;
  }
}
