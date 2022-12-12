import Game  from 'src/app/models/Game';
import { GameItemComponent } from './../../components/games/game-item/game-item.component';
import { Directive, ElementRef, Input } from "@angular/core";

@Directive({
    selector: "[game]",
})
export class GameDirective{

    @Input()
    game?:Game;

    constructor(private el: ElementRef){
        if(this.game?.vitoria){
            el.nativeElement.style.backgroundColor = "red";

        }

    }
    
}