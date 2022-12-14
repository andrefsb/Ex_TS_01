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
