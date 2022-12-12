import Game from 'src/app/models/Game';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-game-create',
  templateUrl: './game-create.component.html',
  styleUrls: ['./game-create.component.css']
})
export class GameCreateComponent {
  

  newGame: Game = new Game("Novo Jogo", new Date(), "00:00");

  gameForm?: FormGroup;

  // titleControl: FormControl = new FormControl("Novo Jogo");
  // dayControl: FormControl = new FormControl(new Date());
  // hourControl: FormControl = new FormControl(null);
  // resultControl: FormControl = new FormControl(null);
  // vitoriaControl: FormControl = new FormControl(false);


  ngOnInit() {
    this.gameForm = new FormGroup({
      title: new FormControl(this.newGame.title),
      day: new FormControl(this.newGame.day),
      hour: new FormControl(this.newGame.hour),
      result: new FormControl(this.newGame.result),
      vitoria: new FormControl(this.newGame.vitoria)

    });
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

    this.newGame = this.gameForm?.value;
    
    console.log(this.newGame)
    }
}

