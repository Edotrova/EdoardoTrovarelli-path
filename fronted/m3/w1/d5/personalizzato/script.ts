
// import {style} from 


// document.querySelector(".button")?.addEventListener('click', function togliOpacita(){
//    let row : HTMLElement | null=  document.querySelector(".row");
// row?.style.opacity = '1'
// })


interface ISmartphone{      //Qui ho costruito l'interfaccia 
    carica:number;           //carica e numerochiamate sono le proprietà
    numeroChiamate:number;
     ricarica(unaRicarica:number):void;   //metodi
     chiamata(minutiDurata:number):void;
     numero404():number;
     getNumeroChiamate(numeroChiamate:number):number;
     azzeraChiamate(numeroChiamate:number):void;
}


class FirstUser implements ISmartphone {  //implementazione dell'interfaccia nella
    carica:number;                        //classe
    numeroChiamate:number;
    costoChiamata:number;
    unaRicarica:number;
    minutiDurata:number;
                                            //costruttore della classe
    
    constructor(carica:number, numeroChiamate:number, costoChiamata:number, unaRicarica:number, minutiDurata:number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;          
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
        
    }

 ricarica(unaRicarica:number):void {   // metodo ricarica()

this.carica += unaRicarica  //operatore di assegnamento +=
}

chiamata(minutiDurata:number):void {  //metodo chiamata()

    
     this.carica -= (this.costoChiamata * minutiDurata) 

     this.numeroChiamate++       //operatore di incremento per aumentare  
                                 //il numero di chiamate
}

numero404():number {       

return this.carica

}

getNumeroChiamate():number {
    return this.numeroChiamate;
}

azzeraChiamate(): void {
    this.numeroChiamate -= this.numeroChiamate; 
}

}


class SecondUser implements ISmartphone {

    carica:number;
    numeroChiamate:number;
    costoChiamata:number;
    unaRicarica:number;
    minutiDurata:number;

    
    constructor(carica:number, numeroChiamate:number, costoChiamata:number, unaRicarica:number, minutiDurata:number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
        
    }

 ricarica(unaRicarica:number):void {   //primo metodo

this.carica += unaRicarica
    
}

chiamata(minutiDurata:number):void {

    
     this.carica -= (this.costoChiamata * minutiDurata) 

     this.numeroChiamate++

}

numero404():number {

return this.carica

}

getNumeroChiamate():number {
    return this.numeroChiamate;
}

azzeraChiamate(): void {
    this.numeroChiamate -= this.numeroChiamate; 
}

}

class ThirdUser implements ISmartphone {

    carica:number;
    numeroChiamate:number;
    costoChiamata:number;
    unaRicarica:number;
    minutiDurata:number;

    
    constructor(carica:number, numeroChiamate:number, costoChiamata:number, unaRicarica:number, minutiDurata:number){
        this.carica = carica;
        this.numeroChiamate = numeroChiamate;
        this.costoChiamata = costoChiamata;
        this.unaRicarica = unaRicarica;
        this.minutiDurata = minutiDurata;
        
    }

 ricarica(unaRicarica:number):void {   //primo metodo

this.carica += unaRicarica
    
}

chiamata(minutiDurata:number):void {

    
this.carica -= (this.costoChiamata * minutiDurata) 

this.numeroChiamate++

}

numero404():number {

return this.carica

}

getNumeroChiamate():number {
    return this.numeroChiamate;
}

azzeraChiamate(): void {
    this.numeroChiamate -= this.numeroChiamate; 
}

}

//da qui in poi faccio l'istanza delle classi. 
//Mario è l'istanza della classe FirstUser


let Mario = new FirstUser(20, 5, 0.20, 30, 4); 

Mario.ricarica(30)

document.getElementById('ricaricaEffettuata')?.addEventListener('click', function mostraUltimaChiamata(e){
    let domSiri:any =  document.querySelector("#Siri");
    let div = document.createElement("div");
    div.innerHTML = "Il tuo credito è di " + Mario.carica + " euro "
    domSiri.append(div)
    div.addEventListener("click", function (){
        div.remove();
    })
})


console.log(Mario.carica)

document.getElementById('creditoResiduo')?.addEventListener('click', function mostraUltimaChiamata(e){
    let domSiri:any =  document.querySelector("#Siri");
    let div = document.createElement("div");
    div.innerHTML = "Il tuo credito residuo è di " + Mario.carica + " euro "
    domSiri.append(div)
    div.addEventListener("click", function (){
        div.remove();
    })
})



Mario.chiamata(2)

console.log(Mario.carica)
console.log(Mario.numeroChiamate)


document.getElementById('chiamateEffettuate')?.addEventListener('click', function mostraUltimaChiamata(e){
    let domSiri:any =  document.querySelector("#Siri");
    let div = document.createElement("div");
    div.innerHTML = "Da questa mattina hai effettuato " + Mario.numeroChiamate + " chiamate"
    domSiri.append(div)
    div.addEventListener("click", function (){
        div.remove();
    })
})


    

Mario.numero404()

console.log(Mario.carica)

Mario.getNumeroChiamate()

console.log(Mario.numeroChiamate)


// Mario.azzeraChiamate();

// console.log(Mario.numeroChiamate)

document.getElementById('ultimaChiamata')?.addEventListener('click', function mostraUltimaChiamata(e){
    let domSiri:any =  document.querySelector("#Siri");
    let div = document.createElement("div");
    div.innerHTML = "La durata della tua ultima chiamata è stata di " + Mario.minutiDurata + " minuti"
    domSiri.append(div)
    div.addEventListener("click", function (){
        div.remove();
    })
})






//Laura è l'istanza della classe SecondUser

let Laura = new FirstUser(10, 5, 0.20, 20, 4);

Laura.ricarica(20)

console.log(Laura.carica)

Laura.chiamata(2)

console.log(Laura.carica)
console.log(Laura.numeroChiamate)

Laura.numero404()

console.log(Laura.carica)

Laura.getNumeroChiamate()

console.log(Laura.numeroChiamate)

Laura.azzeraChiamate();

console.log(Laura.numeroChiamate)

//Francesco è l'istanza della classe ThirdUser.

let Francesco = new FirstUser(5, 3, 0.20, 10, 3);

Francesco.ricarica(20)

console.log(Francesco.carica)

Francesco.chiamata(40)

console.log(Francesco.carica)
console.log(Francesco.numeroChiamate)

Francesco.numero404()

console.log(Francesco.carica)

Francesco.getNumeroChiamate()

console.log(Francesco.numeroChiamate)

Francesco.azzeraChiamate();

console.log(Francesco.numeroChiamate)



