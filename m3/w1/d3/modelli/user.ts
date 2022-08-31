import {Address} from './Address'

export class User {

    protected id:number|undefined;
    name:string;
    lastName:string;
    address:Address|undefined;
    billingAddress:Address|undefined;
    constructor(name:string, lastName:string){
        this.name = name;
        this.lastName = lastName;

    }

    set setAddress(address:Address){
        this.address = address;
    }
    set setBillingAddress(address:Address){
        this.billingAddress = address;
    }
}

let user  = new User('mario', 'rossi');   

let address:Address = new Address('via roma 1', 'roma', 'italia', 65495);
user.setAddress = address;

