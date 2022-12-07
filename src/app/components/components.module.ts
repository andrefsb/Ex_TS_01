import { MaterialModule } from './material/material.module';
import { GamesComponent } from './../components/games/games.component';
import { SharedModule } from './../shared/shared.module';
import { GameItemComponent } from './games/game-item/game-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [ 
    GamesComponent,
    GameItemComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule
  ],
  exports:[
    GamesComponent,
    GameItemComponent
  ]
})
export class ComponentsModule { }
