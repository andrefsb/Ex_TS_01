import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSlideToggleModule} from '@angular/material/slide-toggle'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,    
  ],
  exports:[
    MatSlideToggleModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCheckboxModule
  ]
})
export class MaterialModule { }
