"use strict";
class FirstUser {
    //costruttore della classe
    constructor(carica, numeroChiamate, costoChiamata, unaRicarica, minutiDurata) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica; //operatore di assegnamento +=
    }
    chiamata(minutiDurata) {
        this.carica -= (this.costoChiamata * minutiDurata);
        this.numeroChiamate++; //operatore di incremento per aumentare  
        //il numero di chiamate
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate -= this.numeroChiamate;
    }
}
class SecondUser {
    constructor(carica, numeroChiamate, costoChiamata, unaRicarica, minutiDurata) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= (this.costoChiamata * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate -= this.numeroChiamate;
    }
}
class ThirdUser {
    constructor(carica, numeroChiamate, costoChiamata, unaRicarica, minutiDurata) {
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
    }
    ricarica(unaRicarica) {
        this.carica += unaRicarica;
    }
    chiamata(minutiDurata) {
        this.carica -= (this.costoChiamata * minutiDurata);
        this.numeroChiamate++;
    }
    numero404() {
        return this.carica;
    }
    getNumeroChiamate() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate -= this.numeroChiamate;
    }
}
//da qui in poi faccio l'istanza delle classi. 
//Mario è l'istanza della classe FirstUser
let Mario = new FirstUser(20, 5, 0.20, 30, 4);
Mario.ricarica(30);
console.log(Mario.carica);
Mario.chiamata(2);
console.log(Mario.carica);
console.log(Mario.numeroChiamate);
Mario.numero404();
console.log(Mario.carica);
Mario.getNumeroChiamate();
console.log(Mario.numeroChiamate);
Mario.azzeraChiamate();
console.log(Mario.numeroChiamate);
//Laura è l'istanza della classe SecondUser
let Laura = new FirstUser(10, 5, 0.20, 20, 4);
Laura.ricarica(20);
console.log(Laura.carica);
Laura.chiamata(2);
console.log(Laura.carica);
console.log(Laura.numeroChiamate);
Laura.numero404();
console.log(Laura.carica);
Laura.getNumeroChiamate();
console.log(Laura.numeroChiamate);
Laura.azzeraChiamate();
console.log(Laura.numeroChiamate);
//Francesco è l'istanza della classe ThirdUser.
let Francesco = new FirstUser(5, 3, 0.20, 10, 3);
Francesco.ricarica(20);
console.log(Francesco.carica);
Francesco.chiamata(40);
console.log(Francesco.carica);
console.log(Francesco.numeroChiamate);
Francesco.numero404();
console.log(Francesco.carica);
Francesco.getNumeroChiamate();
console.log(Francesco.numeroChiamate);
Francesco.azzeraChiamate();
console.log(Francesco.numeroChiamate);
//# sourceMappingURL=script.js.map