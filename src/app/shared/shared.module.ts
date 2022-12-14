import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GameDirective } from './directives/game.directive';
import { StatusPipe } from './pipes/status.pipe';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../components/material/material.module';
import { DialogComponent } from './dialog/dialog.component';
import { GameFormComponent } from './game-form/game-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    StatusPipe,
    GameDirective,
    DialogComponent,
    GameFormComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ], 
  exports:[
    HeaderComponent,
    StatusPipe, 
    GameDirective,
    DialogComponent,
    GameFormComponent
  ]
})
export class SharedModule { }
