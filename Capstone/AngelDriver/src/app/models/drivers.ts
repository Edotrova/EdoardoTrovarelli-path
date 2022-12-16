export class Drivers {

    id: number | undefined;
    username: string;
    name: string;
    surname: string;
    regDate: Date;
    date: Date;
    email: string;
    password: string;
    role: string;
    monopattino: boolean;
   
    constructor(username: string, name: string, surname: string, date: Date, email: string, password: string, monopattino: boolean) {
        this.username = username
        this.name = name
        this.surname = surname
        this.regDate = new Date()
        this.date = date
        this.email = email
        this.password = password
        this.role = 'user'
        this.monopattino = monopattino

    }


}
