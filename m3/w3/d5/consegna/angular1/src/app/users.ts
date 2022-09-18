export class Users {
  
    id:number | undefined;
    name?:string ;
    surname?:string ;
    date?:Date ;
    email:string;
    password?:string;
    role:string;
    constructor(name:string, surname:string, date:Date,  email:string, password:string , role:string) {
       this.name = name
       this.surname = surname
       this.date = date
        this.email = email
    this.password = password
    this.role = 'user'

    }
}
