package com.GestioneIncendi.GestioneIncendi.models;

import lombok.Builder;

@Builder
public class CentroDiControlloFactory {

	public static CentroDiControllo createCentroDiControllo(int type) {
		switch(type) {
		case 0:
			return new CentroDiControllo();
		case 1:
			return new CentroDiControllo("Centro Roma", "QWERTY");
		case 2:
			return new CentroDiControllo().builder()
					.nome("Centro Milano")
					.password("QWERTY")
					.build();
			default:
				throw new RuntimeException("Si è verificato un errore");
		}
	}
	
}
