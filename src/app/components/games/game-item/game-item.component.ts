
import { Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { GameService } from './../../../services/game.service';
import Game from 'src/app/models/Game';
import { DialogComponent } from 'src/app/shared/dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-item',
  templateUrl: './game-item.component.html',
  styleUrls: ['./game-item.component.css']
})

export class GameItemComponent {
  // @Input("tit") title: string = "Jogo não especificado";
  // description: string = "Sem descrição";
  // dueDate: Date= new Date();
  // status: boolean = false;

  @Input() game?: Game = {
    id:0,
    title: "Jogo não especificado",
    day: new Date(),
    hour: "00",
    result: "0x0",
    vitoria: false
  };

  @ViewChild('dialogTemplate') dialogTemplate?: TemplateRef<any>;


  constructor(private gameService: GameService, private dialog: MatDialog) {

  }

  ngOnInit(){
    // console.log(`Task List Item com id = ${this.game?.id}!`)
  }

  changeStatus() {
      if(this.game && new Date(this.game.day).getTime() <= new Date().getTime())this.game.vitoria = !this.game.vitoria;
  }

  getColor(): string {
    return this.game?.vitoria ? "rgb(0, 255, 102)" : "";
  }

  ngOnChanges(): void {
    // console.log("Game List Item has changed!")
  }

  deleteItem(){
   if(this.game) this.gameService.deleteGame(this.game.id);
  }

  openDialog() {
    if(this.dialogTemplate)
    this.dialog.open(this.dialogTemplate, {data:{title: "Atualizar Jogo"}})
  }

}

