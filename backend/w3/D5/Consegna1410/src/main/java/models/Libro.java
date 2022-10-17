package models;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
	public class Libro extends ElementoLetterario {

	private String autore;
	private String genere;
		
		public Libro(String ISBN, String titolo, int anno, int numero, String autore, String genere) {
			super(ISBN, titolo, anno, numero);
			this.genere = genere;
			this.autore = autore;
		}

	public String getAutore() {
		
		return autore;
	}
	
	public void setAutore(String autore) {
		this.autore = autore;
	}
	
	public String getGenere() {
		return genere;
	}
	
	public void setGenere(String genere) {
		this.genere = genere;
	}


	@Override
	public String toString() {
		
		return "L," + super.toString() + ","+this.genere+","+this.getAutore();
	}


	
}
