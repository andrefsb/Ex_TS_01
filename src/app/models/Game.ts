export default class Game{

    static lastId:number=5;

    id: number;
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

        this.id=Game.updateLastId();
    }

    static updateLastId(id?:number):number{
        this.lastId=id?? this.lastId+1;
        return this.lastId;
    }
}