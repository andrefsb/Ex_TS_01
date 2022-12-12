import { GameDirective } from './directives/game.directive';
import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../components/material/material.module';



@NgModule({
  declarations: [
    HeaderComponent,
    StatusPipe,
    GameDirective
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
  ], 
  exports:[
    HeaderComponent,
    StatusPipe, 
    GameDirective
  ]
})
export class SharedModule { }
