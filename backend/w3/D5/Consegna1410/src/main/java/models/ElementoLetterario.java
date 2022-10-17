package models;

import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public abstract class ElementoLetterario {
	
	protected String ISBN;
	protected String titolo;
	protected int anno;
	protected int numero;
	
	

	

}
