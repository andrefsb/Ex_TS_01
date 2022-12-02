import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
  ],
  exports:[
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule
  ]
})
export class MaterialModule { }
