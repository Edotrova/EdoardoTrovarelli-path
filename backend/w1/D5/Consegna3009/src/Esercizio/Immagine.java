package Esercizio;

public class Immagine extends ElementoMultimediale implements Luminosita {

	private int lum;
	
	protected Immagine(String t, int lum) {
		super(t);
		
		this.lum = lum;
	}
	
	 public void show() {
	        String asterischi = "";
	        for (int a = 0; a < this.lum; a++) {
	            asterischi += "*";
	        }
	        System.out.println(getTitle() + " " + asterischi);
	    }

	@Override
	public void alzaLum() {
		// TODO Auto-generated method stub
		lum++;
	}

	@Override
	public void abbassaLum() {
		// TODO Auto-generated method stub
		lum--;
	}


}
