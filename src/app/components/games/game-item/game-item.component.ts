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
  day:"Sem descrição",
  hour: "teste",
  result: "teste",
};

constructor() {

}
}

