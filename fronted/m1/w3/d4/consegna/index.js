
    //punto1


let titolo = 'Corso di Javacript'    //stringadipartenza

let maius = titolo.toUpperCase();   //metodi maius - minus e divisione in elementi
console.log(maius);

let minus = titolo.toLowerCase();
console.log(minus);


let divisione = titolo.split('');
console.log(divisione);

let nuovoTitolo2 =(divisione[0]) + (divisione[2]); //unicastringa
console.log(nuovoTitolo);


        //punto2


let gruppo = ["Fabiola", "Edoardo", "Luigi", "Giuseppe"] //array di persone

console.log(gruppo[2]); // lettura terzo elemento

let amici = Alessandro              //variabile let 
gruppo.push(amici);        // passa all'array un valore tramite una variabile 
console.log(gruppo);

console.log(gruppo.length);   // lettura lunghezza array



//punto4                    //creare una funzione all'interno della quale utilizzare i valori tratti da un array

function sum(){

    let numeri = [2, 6, 10];             
    return numeri[0]+ numeri [1] + numeri[2];  

}

sommma()
console.log(somma())


//punto5        //metodi push/pop  e shift/unishift


let frutta = ['banana', 'fragola', 'mela', 'anguria']

let eliminaUltimo = frutta.pop();
  console.log(eliminaUltimo);
    

let aggiungiUltimo = frutta.push("melone")
    console.log(aggiungiUltimo);
    console.log(frutta)

 let eliminaPrimo = frutta.shift ();
    console.group(eliminaPrimo);

 let aggiungPrimo = frutta.unishift (cocco);
    console.log(aggiungiPrimo);
    console.log(frutta);