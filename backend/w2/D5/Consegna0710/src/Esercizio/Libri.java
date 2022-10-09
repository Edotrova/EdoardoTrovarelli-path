package Esercizio;

public class Libri extends Volume {

	 String autore;
	Genere genere;
	
	public Libri(long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, String autore, Genere g) {
		super(codiceISBN, titolo, annoPubblicazione, numeroPagine);
		this.genere = g;
		this.autore = autore;
	}

public String getAutore() {
	
	return autore;
}


@Override
public String toString() {
	
	return "L," + super.toString() + ","+this.genere+","+this.getAutore();
}


}
