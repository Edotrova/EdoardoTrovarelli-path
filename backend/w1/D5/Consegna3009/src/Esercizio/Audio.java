package Esercizio;

public class Audio extends ElementoRiproducibile {

	
	private int vol;
	private int dur;
	
	protected Audio(String t, int vol, int dur) {
		super(t);
		this.vol = vol;
		this.dur = dur;
	}
	
	
	
	
	 public void play() {
	        String esclamativo = "";
	        String durata = "";
	        for (int a = 0; a < this.vol; a++) {
	            esclamativo += "!";
	        }
	        for (int a = 0; a < this.dur; a++) {
	            durata += getTitle();
	        }
	        System.out.println (durata + " " + esclamativo);
	    }

	public void alzaVolume() {
		this.vol ++;
	}

	
}
