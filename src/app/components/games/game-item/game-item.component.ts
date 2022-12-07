import { Component, Input } from '@angular/core';
import Game from 'src/app/models/Game';

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
    title: "Jogo não especificado",
    day: new Date(),
    hour: "00",
    result: "0x0",
    vitoria: false
  };

  constructor() {

  }

  changeStatus() {
      if(this.game) this.game.vitoria = !this.game.vitoria;
  }

  getColor(): string {
    return this.game?.vitoria ? "rgb(0, 255, 102)" : "";
  }

  ngOnChanges(): void {
    console.log("Game List Item has changed!")
  }
}

