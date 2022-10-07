package it.epicode.be;

public class esercizio4 {

	public static void main(String[] args) {
	
	}
}

class chiamata{
	
	int numero;
	int durata;
	
	chiamata(int numero, int durata){
		this.numero=numero;
		this.durata=durata;
	}
	
	void print() {
		System.out.println("Numer1" + numero + "Durata1 " + durata);
		
	}
	
}

class Sim{
	int numTel;
	int credito;
	chiamata[] arrCalls;
	
	Sim(int numTel){
		this.numTel = numTel;
	}
}
	
	
