package Esercizio;

public enum Periodicita {

	SETTIMANALE,
	MENSILE,
	SEMESTRALE,
	UNDEFINED;
	
	
	public static Periodicita getFromString(String s) {
		for(Periodicita p : Periodicita.values()) {
			if (p.toString().equalsIgnoreCase(s)) {
				return p;
			}
	
		}
		return UNDEFINED;
	}
	
	
}
