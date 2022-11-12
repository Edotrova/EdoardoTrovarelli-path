package com.GestioneIncendi.GestioneIncendi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.GestioneIncendi.GestioneIncendi.models.CentroDiControllo;
import com.GestioneIncendi.GestioneIncendi.models.CentroDiControlloProxy;
import com.GestioneIncendi.GestioneIncendi.models.ControlloSonda;
import com.GestioneIncendi.GestioneIncendi.models.Sonda;

@SpringBootApplication
public class GestioneIncendiApplication {

	public static void main(String[] args) {
		
		Sonda sonda1 = new Sonda (4.0, 4.0);
		Sonda sonda2 = new Sonda (8.0, 8.0);
	
	
	CentroDiControlloProxy c0 = new CentroDiControlloProxy(1);
	CentroDiControlloProxy c1 = new CentroDiControlloProxy(2);
	
	ControlloSonda cs0 = new ControlloSonda(c0);
	ControlloSonda cs1 = new ControlloSonda(c1);
	
	
	sonda1.addObservers(cs0);
	sonda2.addObservers(cs1);
	
	sonda1.setQuantitaDiFumo(6);
	
	
	}
}
