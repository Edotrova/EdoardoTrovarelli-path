package models;

import javax.persistence.Entity;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Rivista extends ElementoLetterario{

private Periodicita periodicita;

public Rivista(String ISBN, String titolo, int anno, int numero, Periodicita periodicita) {
	super(ISBN, titolo, anno, numero);
	this.periodicita=periodicita;
}

public Periodicita getPeriodicita() {
	return periodicita;
}

public void setPeriodicita(Periodicita periodicita) {
	this.periodicita = periodicita;
}

public static String toStringFile(Rivista rivista) {
	return Rivista.class.getSimpleName()
	+"@" + rivista.ISBN
	+"@" + rivista.titolo
	+"@" + rivista.anno
	+"@" + rivista.numero
	+"@" + rivista.periodicita;
}

public static Rivista fromStringFile(String stringFile) {
	String[] split = stringFile.split("@");
	Periodicita periodicita = Periodicita.valueOf(split[5]);
	
	return new Rivista(split[1], split[2],Integer.valueOf(split[3]),Integer.valueOf(split[4]), periodicita);
}
	
}
