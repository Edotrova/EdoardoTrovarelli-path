
let target = document.querySelector('#lista');

fetch('db.json')
.then(res => res.json())
.then(utenti => {

    for (let cosa of utenti) {
        let div = document.createElement('div');
    div.innerHTML = cosa.nome + " ha pubblicato " + "(" + cosa.data + ") : " + cosa.commento;
    // if (commento == "") {div.innerHTML = nome + " vi manda un saluto"}
     div.classList.add('alert', 'alert-success');

    document.querySelector('#lista').append(div);
    }
    // let guest = new GuestElement(nome.value, data.value, commento.value);
    // guestBook.push(guest);

    // let guestJson = JSON.stringify(guestBook);//trasformo l'oggetto in stringa json
    // localStorage.setItem('lista', guestJson)//salvo l'oggetto

})


class GuestElement {
    constructor(nome, data, commento) {
        this.nome = nome;
        this.data = data;
        this.commento = commento;
    }
}

let bottone = document.querySelector('#saluta');



// if(jsonGuestBook){
//     let json = JSON.parse(jsonGuestBook);
//     console.log(jsonGuestBook);
// }

let guestBook = localStorage.getItem('lista') ? JSON.parse(localStorage.getItem('lista')) : [];
console.log(guestBook);




bottone.addEventListener('click', function(e) {

    e.preventDefault();

    let nome = document.querySelector('#nome');

    let data = document.querySelector('#data');

    let commento = document.querySelector('#commento');

//     // creo l'html

    creaGuest(nome.value, data.value, commento.value);
   

    let guest = new GuestElement(nome.value, data.value, commento.value);
    guestBook.push(guest);

    let utentiJson = JSON.stringify(guestBook);//trasformo l'oggetto in stringa json
    localStorage.setItem('lista', utentiJson)//salvo l'oggetto


    document.querySelector('#formGuest').reset()

// })

function creaGuest(nome, data, commento){
    let div = document.createElement('div');
    div.innerHTML = nome + " ha pubblicato " + "(" + data + ") : " + commento;
    // if (commento == "") {div.innerHTML = nome + " vi manda un saluto"}
     div.classList.add('alert', 'alert-success');

    document.querySelector('#lista').append(div);

    
};




});
