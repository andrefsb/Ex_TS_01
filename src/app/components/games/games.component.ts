import  {GameService}  from './../../services/game.service';
import Game from 'src/app/models/Game';
import { Component, Input, OnChanges, OnInit } from '@angular/core'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnChanges, OnInit {

  gameList: Game[]=[];

  constructor (private gameService : GameService){

  }

  ngOnInit(): void{
    this.gameList =  this.gameService.getGames();
  }

  ngOnChanges(): void {
    // console.log("Game List has changed!")
  }

  

}
