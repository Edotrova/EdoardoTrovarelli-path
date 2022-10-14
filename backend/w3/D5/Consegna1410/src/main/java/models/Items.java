package models;

public abstract class Items {

	
		public long ISBN;
		public String titolo;
		public int anno;
		public int numero;
		

		public Items(long ISBN, String titolo, int anno, int numero) {
			
			this.ISBN = ISBN;
			this.titolo = titolo;
			this.anno = anno;
			this.numero = numero;
			
		}


	public long getISBN() {
		return this.ISBN;
	}
	public int getAnno() {
		return this.anno;
	}

	public String toString() {
		return this.ISBN+","+titolo+","+anno+","+numero;
	}
		
	}

