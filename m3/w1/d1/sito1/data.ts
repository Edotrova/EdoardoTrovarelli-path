let stringa:string = 'Mario'
let numero:number = 0;
let booleano:boolean = false;
let oggetto:object = {};
let array:any[] = [];
let union:(string|number|boolean) = true;
let any:any = {
    nome:'Mario',
    cognome:'Rossi',
};

console.log(any.nome);

let sconosciuto:unknown = {};


function saluta3(saluto:string):string{
    return saluto;

}

function saluta4(saluto:string|null):string|null{
    return saluto
}



let oggetto2:{nome:string, cognome:string} = {

    nome: 'Mario',
    cognome:'Rossi'
}

console.log(oggetto2.nome)



class User {
    nome:string;
    cognome:string;

    // constructor{nome:string, cognome:string}{
    //     this.nome = nome;
    //     this.cognome = cognome;
    // }
}

let oggetto3:User = {
    nome:'Mario',
    cognome:'Rossi'
}