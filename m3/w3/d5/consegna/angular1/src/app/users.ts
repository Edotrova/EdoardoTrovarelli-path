export class Users {
  
    id:number | undefined;
    name?:string ;
    surname?:string ;
    date?:Date ;
    email:string;
    password?:string | undefined;
    constructor(  email:string, password:string | undefined) {
       
        this.email = email;
    this.password = password

    }
}
