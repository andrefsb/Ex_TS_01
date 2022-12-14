import { Injectable } from '@angular/core';
import Game from '../models/Game';

@Injectable({
  providedIn: 'root'
})

export class GameService {

  title = 'lista-chave-copa';

  gameList: Game[] = [
    {
    id:1,
    title: 'Brasil x Sérvia',
    day: new Date("11/14/2022"),
    hour: "16:00",
    result: "2x0",
    vitoria: true
  },
  {
    id:2,
    title: 'Brasil x Suíça',
    day: new Date("11/18/2022"),
    hour: "13:00",
    result: "1x0",
    vitoria: true
  },
  {
    id:3,
    title: 'Brasil x Camarões',
    day: new Date("12/2/2022"),
    hour: "16:00",
    result: "0x1",
    vitoria: false
  }
    ,
  {
    id:4,
    title: 'Brasil x Coréia',
    day: new Date("12/5/2022"),
    hour: "16:00",
    result: "4x1",
    vitoria: true
  }
  ,
  {
    id:5,
    title: 'Brasil x Croácia',
    day: new Date("12/9/2022"),
    hour: "12:00",
  }];

  constructor(){
    // Game.updateLastId(this.gameList(this.gameList.length-1).id);
  }

  getGames(): Game[]{
    return this.gameList;
  }

  postGame(newGame:Game): void{
    this.gameList.push(newGame);
  }

  
  updateGame(id: number, updatedGame: Game) {
    const index = this.gameList.findIndex((game)=> game.id == id);
    this.gameList[index] = updatedGame;
  }

  deleteGame(id:number){
    const index = this.gameList.findIndex((game)=> game.id==id);
    this.gameList.splice(index,1);
  }

}
