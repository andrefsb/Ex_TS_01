import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../components/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    StatusPipe
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ], 
  exports:[
    HeaderComponent,
    StatusPipe
  ]
})
export class SharedModule { }
