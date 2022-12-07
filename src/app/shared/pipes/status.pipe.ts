import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name:"vitoria",
})


export class StatusPipe implements PipeTransform{
    transform(value:boolean){
        return value ? "Ganhoooou!" : "Perdeu :(";
    }

}