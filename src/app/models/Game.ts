export default class Game{
    title: string;
    day: Date;
    hour: string;
    result?: string;
    vitoria?: boolean;


    constructor(title: string, day: Date = new Date(), hour: string, result?: string, vitoria?: boolean){
        this.title=title;
        this.day = day;
        this.hour = hour;
        this.result = result;
        this.vitoria=vitoria;
    }
}