
let data = new Date()

data;

console.log(data)

let dataattuale = document.getElementById("data-attuale")
dataattuale.innerHTML = data

console.log (data.getHours())

console.log (data.getMinutes())

console.log (data.getSeconds())

console.log (data.getFullYear())

console.log (data.getDay())

console.log (data.getMonth())

console.log (data.getDate())

console.log (data.toLocaleDateString())

console.log (data.toLocaleTimeString())

// formato europeo //


let dataEuropea = new Date(2022, 6, 18, 15, 56, 15, 1)
console.log (dataEuropea)

let dataFormattata = document.getElementById("data-europea")
dataFormattata.innerHTML= dataEuropea

console.log (data.getDay())

if(data.getDay==0) {

    console.log ('Domenica')
    

}else if ( data.getDay == 1) {
    console.log ('Lunedì')
}