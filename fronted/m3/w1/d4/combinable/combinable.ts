type combinable = number | string;

let x:combinable = '4'
let y:combinable = '5'


function combina(input1:combinable, input2:combinable):combinable {

    let result:combinable = '';
    if(typeof input1 === 'string'&& typeof input2 === 'string') {
 let result:combinable = input1.toString() + String(input2);
}else{
    let result:combinable = Number(input1) + Number(input2);
}
return result
}