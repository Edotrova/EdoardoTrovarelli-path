package Esercizio;

public class Riviste extends Volume {

	Periodicita periodicita;
	
	public Riviste(long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, Periodicita p) {
		super(codiceISBN, titolo, annoPubblicazione, numeroPagine);
		// TODO Auto-generated constructor stub
		
	this.periodicita = p;
		
	}
	
	@Override
	public String toString() {
		
		return "R," + super.toString() + ","+this.periodicita+",";
	}



}
