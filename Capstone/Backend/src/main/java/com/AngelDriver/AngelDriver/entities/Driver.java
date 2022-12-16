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
@Table(name = "drivers")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class Driver {

	@Id
	@GeneratedValue
	public long id;
	public String Username;
	public String nome;
	public String cognome;
	public LocalDate dataDiNascita;
	public String email;
	public String password;
	public String luogoDiNascita;
	public String monopattino;

	
}
