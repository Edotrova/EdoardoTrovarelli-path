package Esercizio;

public class Video extends ElementoRiproducibile implements Luminosita {

	private int lum;
	private int vol;
	private int dur;
	
	
	protected Video(String t, int l, int vol, int dur) {
		super(t);
		this.lum = lum;
		this.vol = vol;
		this.dur = dur;
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	  public void play() {
	        String asterischi = ""; String esclamativo = ""; String durata = "";
	        for (int a = 0; a < this.lum; a++) {
	            asterischi += "*";
	        }
	        for (int a = 0; a < this.vol; a++) {
	            esclamativo += "!";
	        }
	        for (int a = 0; a < this.dur; a++) {
	            durata += getTitle();
	        }
	        System.out.println(durata + " " + esclamativo + " " + asterischi);
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
	
	public void alzaVol() {
		vol++;
	}
	public void abbassaVol() {
		vol--;
	}



}
