package com.AngelDriver.AngelDriver.entities;

import java.time.LocalDate;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "corsa")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Corsa {

	@Id
	@GeneratedValue
	public long id;
	public int durata; 
	public int costo; 
	public String puntoPartenza;
	public String puntoArrivo;
}
