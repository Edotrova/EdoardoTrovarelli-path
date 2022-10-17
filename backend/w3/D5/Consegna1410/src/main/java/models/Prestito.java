package models;

import java.time.LocalDate;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Prestito {

	@Id
	private Long id;
	
	@ManyToOne
	private Utente utente;
	
	@ManyToOne
	private ElementoLetterario elemento;
	
	private LocalDate inizioPrestito;
	private LocalDate finePrestito;
	private LocalDate dataRestituzione;
	
	
	
}
