"use strict";
// import {style} from 
var _a, _b, _c, _d;
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
(_a = document.getElementById('ricaricaEffettuata')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function mostraRicarica() {
    let domSiri = document.querySelector("#Siri");
    domSiri.append("Hai effettuato una ricarica di " + Mario.unaRicarica + " euro ");
});
console.log(Mario.carica);
(_b = document.getElementById('creditoResiduo')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function mostraCredito() {
    let domSiri = document.querySelector("#Siri");
    domSiri.append("Il tuo credito residuo è di " + Mario.carica + " euro ");
});
Mario.chiamata(2);
console.log(Mario.carica);
console.log(Mario.numeroChiamate);
(_c = document.getElementById('chiamateEffettuate')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function mostraChiamate() {
    let domSiri = document.querySelector("#Siri");
    domSiri.append("Da questa mattina hai effettuato " + Mario.numeroChiamate + " chiamate");
});
Mario.numero404();
console.log(Mario.carica);
Mario.getNumeroChiamate();
console.log(Mario.numeroChiamate);
// Mario.azzeraChiamate();
// console.log(Mario.numeroChiamate)
(_d = document.getElementById('ultimaChiamata')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', function mostraUltimaChiamata() {
    let domSiri = document.querySelector("#Siri");
    domSiri.append("La durata della tua ultima chiamata è stata di " + Mario.minutiDurata + " minuti");
});
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