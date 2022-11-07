

function numero(x:number):number{
    return x;

}

function numeroGeneric<T>(x:T):T{
    return x;

}

numeroGeneric<number>(5)

function sommaOConcatena<T,U>(x:T, y:U):any{

}

sommaOConcatena<string[], number>(['ciao',5])