var a = 5;
var b = '5';
var day = new Date().getDay();
console.log();
// if(day == 0) {
//     console.log('Domenica')
// }
switch (day) {
    case 0:
        console.log('Domenica');
        break;
    case 1:
        console.log('Lunedì');
        break;
}
