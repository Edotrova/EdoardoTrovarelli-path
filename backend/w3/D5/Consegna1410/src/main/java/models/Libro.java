package models;



	public class Libro extends Items {

		 String autore;
		Genere genere;
		
		public Libro(long ISBN, String titolo, int anno, int numero, String autore, Genere g) {
			super(ISBN, titolo, anno, numero);
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
