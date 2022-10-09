package Esercizio;

public abstract class ElementoRiproducibile extends ElementoMultimediale implements Volume {

	protected int vol;
	protected ElementoRiproducibile(String t) {
		super(t);
		// TODO Auto-generated constructor stub
		vol = 10;
	}

	protected abstract void play();
	
	public void alzaVol() {
		vol++;
	}
	public void abbassaVol() {
		vol--;
	}
	
}
