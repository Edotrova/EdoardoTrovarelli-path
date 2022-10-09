package Esercizio;



public class Main {

	
	public static void main(String[] args) {
	
		Catalogo c = new Catalogo("c1");
		
		c.leggiCatalogo();
		if(c.volume.size() == 0) {
			do {
				c.nuovoVolume();
			} while (c.volume.size() < 2);
			
		}
		
		
	
	}

}
