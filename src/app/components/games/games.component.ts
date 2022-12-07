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
    day: "24/11/2022",
    hour: "16:00",
    result: "2x0",
    vitoria: true
  },
  {
    title: 'Brasil x Suíça',
    day: "28/11/2022",
    hour: "13:00",
    result: "1x0",
    vitoria: true
  },
  {
    title: 'Brasil x Camarões',
    day: "02/12/2022",
    hour: "16:00",
    result: "0x1",
    vitoria: false
  }
    ,
  {
    title: 'Brasil x Coréia',
    day: "05/12/2022",
    hour: "16:00",
    result: "4x1",
    vitoria: true
  }];


  ngOnChanges(): void {
    console.log("Game List has changed!")
  }
}
