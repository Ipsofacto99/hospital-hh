import { Component } from '@angular/core';

@Component({
  selector: 'homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent  {

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
