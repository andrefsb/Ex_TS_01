import Game from 'src/app/models/Game';
import { Component, OnChanges } from '@angular/core'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnChanges {
  gameList: Game[] = [{
    title: 'Brasil x Sérvia',
    day: new Date("11/14/2022"),
    hour: "16:00",
    result: "2x0",
    vitoria: true
  },
  {
    title: 'Brasil x Suíça',
    day: new Date("11/18/2022"),
    hour: "13:00",
    result: "1x0",
    vitoria: true
  },
  {
    title: 'Brasil x Camarões',
    day: new Date("12/2/2022"),
    hour: "16:00",
    result: "0x1",
    vitoria: false
  }
    ,
  {
    title: 'Brasil x Coréia',
    day: new Date("12/5/2022"),
    hour: "16:00",
    result: "4x1",
    vitoria: true
  }
  ,
  {
    title: 'Brasil x Croácia',
    day: new Date("12/9/2022"),
    hour: "12:00",
  }];


  ngOnChanges(): void {
    console.log("Game List has changed!")
  }
}
