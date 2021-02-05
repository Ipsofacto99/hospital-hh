import { Component } from '@angular/core';
import { Receta } from '../models/objects';

@Component({
  selector: 'app-recetas-screen',
  templateUrl: './recetas-screen.component.html',
  styleUrls: []
})
export class RecetasScreenComponent {

  receta: Receta;
  editable: boolean; 
  observar: boolean = false;

  constructor(){}

  isObservable(event: boolean){
    this.observar = event
  }

  isEditable(event: boolean){
    this.editable = event;
  }

  newReceta(event: Receta){
    this.receta = event;
  }
}
