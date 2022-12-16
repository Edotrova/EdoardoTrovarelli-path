export class Corsa {

    id: number | undefined;
	durata: Date;       
    costo:number; 
	puntoPartenza: String;
	puntoArrivo:String;

    constructor(durata:Date, costo:number,puntoPartenza:String, puntoArrivo:String){
        this.durata = durata;
        this.costo = costo;
        this.puntoPartenza = puntoPartenza;
        this.puntoArrivo = puntoArrivo
    }
}
