package models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Utente {
	
	@Id
    @SequenceGenerator(name="utente_sequence", sequenceName="utente_sequence", allocationSize=1)
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="utente_sequence")
	private Long id;
	private String Nome;
	private String cognome;
	private LocalDate dataDiNascita;
	private Long numeroTessera;
	
}
