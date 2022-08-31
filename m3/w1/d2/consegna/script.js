"use strict";
var deposit = 10000; //inizializziamo la variabile globale "deposit" 
var addInterest = deposit / 100 * 10; //inizializziamo la variabile globale addInterest
class SonAccount {
    constructor(name, surname, accountBalance) {
        this.name = name;
        this.surname = surname;
        this.balanceInit = accountBalance;
    }
    oneDeposit(deposit) {
        this.balanceInit += deposit;
    }
    oneWhitDraw(whitdraw) {
        let newBalanceInit = this.balanceInit + deposit;
        let SecondBalanceInit = newBalanceInit - whitdraw;
        console.log(SecondBalanceInit);
    }
}
let son = new SonAccount('Edoardo', 'Trovarelli', 0); //nuova istanza della Classe SonAccount
son.oneDeposit(500); //scateniamo le due funzioni oneDeposit e oneWhitDraw
console.log(son.balanceInit);
son.oneWhitDraw(20);
class MotherAccount extends SonAccount {
    constructor(name, surname, accountBalance, addInterest) {
        super(name, surname, accountBalance);
        this.addInterest = addInterest;
    }
    oneMotherDeposit() {
        let newMotherBalanceInit = this.balanceInit + deposit - this.addInterest;
        console.log(newMotherBalanceInit);
    }
    oneMotherWhitDraw() {
        let newBalanceInit = this.balanceInit + deposit;
        let whitdraw = 5000;
        let SecondMotherBalanceInit = newBalanceInit - whitdraw - this.addInterest;
        console.log(SecondMotherBalanceInit);
    }
}
let mother = new MotherAccount('Maria', 'Rossi', 0, addInterest);
mother.oneMotherDeposit();
mother.oneMotherWhitDraw();
//# sourceMappingURL=script.js.map