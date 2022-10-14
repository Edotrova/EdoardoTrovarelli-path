package models;


public class Rivista extends Items {

	
Periodicita periodicita;
	
	public Rivista(long ISBN, String titolo, int anno, int numero, Periodicita p) {
		super(ISBN, titolo, anno, numero);
		// TODO Auto-generated constructor stub
		
	this.periodicita = p;
		
	}
	
}
