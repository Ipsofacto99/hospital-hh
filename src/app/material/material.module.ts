import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,

    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
   
    
  ],
  exports:[
    MatCardModule,
    MatToolbarModule,
    MatGridListModule,
    MatIconModule,

    
  ]
})
export class MaterialModule { }
