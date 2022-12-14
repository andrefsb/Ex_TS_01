
import Game from 'src/app/models/Game';
import { Component, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GameService } from '../../services/game.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent {


  @Input() newGame: Game = new Game("Novo Jogo", new Date(), "00:00","Indefinido",false);
  @Input() requestType: string = "post";
  @Input() post: boolean = false;

  gameForm?: FormGroup;

  // titleControl: FormControl = new FormControl("Novo Jogo");
  // dayControl: FormControl = new FormControl(new Date());
  // hourControl: FormControl = new FormControl(null);
  // resultControl: FormControl = new FormControl(null);
  // vitoriaControl: FormControl = new FormControl(false);

  constructor(private gameService: GameService, private dialog: MatDialog) {

  }


  ngOnInit() {
    this.gameForm = new FormGroup({
      title: new FormControl(this.newGame.title),
      day: new FormControl(this.newGame.day),
      hour: new FormControl(this.newGame.hour),
      result: new FormControl(this.newGame.result),
      vitoria: new FormControl(this.newGame.vitoria)


    });

    if (this.requestType == "post") {
      this.post=true;
    }
    else{
      this.post=false;
  }
}

  onSubmitForm() {
    // this.newGame.title = this.gameForm?.controls ['title'].value;
    // this.newGame.day = this.gameForm?.controls ['day'].value;
    // this.newGame.hour = this.gameForm?.controls ['hour'].value;
    // this.newGame.result= this.gameForm?.controls ['result'].value;
    // this.newGame.vitoria = this.gameForm?.controls ['vitoria'].value;


    this.gameForm?.patchValue({
      title: this.gameForm.controls['title'].value,
      day: this.gameForm.controls['day'].value,
      hour: this.gameForm.controls['hour'].value,
      result: this.gameForm.controls['result'].value,
      vitoria: this.gameForm.controls['vitoria'].value

    })

    this.newGame = { id: this.newGame.id, ...this.gameForm?.value };


    if (this.requestType == "post") {
      this.gameService.postGame(this.newGame);
    }
    else{
      this.gameService.updateGame(this.newGame.id, this.newGame)
    }
  }
}

