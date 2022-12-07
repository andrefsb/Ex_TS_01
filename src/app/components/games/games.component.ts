import  Game  from 'src/app/models/Game';
import { Component } from '@angular/core'

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
gameList: Game[] = [{
  title: 'Brasil x Sérvia',
    day: "24/11/2022",
    hour:"16:00",
    result: "2x0"
},
{
  title: 'Brasil x Suíça',
    day: "28/11/2022",
    hour: "13:00",
    result: "1x0"
},
{
  title: 'Brasil x Camarões',
  day: "02/12/2022",
  hour: "16:00",
  result: "0x1"
}];
}
