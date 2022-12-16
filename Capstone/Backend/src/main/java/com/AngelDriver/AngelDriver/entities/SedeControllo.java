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
@Table(name = "sede")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class SedeControllo {

	@Id
	@GeneratedValue
	public long id;
	public String indirizzo;
	public String citta;
	
	
}
