package Esercizio;

public abstract class Volume {

	

	public long codiceISBN;
	public String titolo;
	public int annoPubblicazione;
	public int numeroPagine;
	

	public Volume(long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine) {
		
		this.codiceISBN = codiceISBN;
		this.titolo = titolo;
		this.annoPubblicazione = annoPubblicazione;
		this.numeroPagine = numeroPagine;
		
	}


public long getISBN() {
	return this.codiceISBN;
}
public int getAnno() {
	return this.annoPubblicazione;
}

public String toString() {
	return this.codiceISBN+","+titolo+","+annoPubblicazione+","+numeroPagine;
}
	
}
