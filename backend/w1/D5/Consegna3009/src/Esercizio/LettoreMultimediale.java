package Esercizio;

import java.util.Scanner;

public class LettoreMultimediale {

	private static ElementoMultimediale[] arr;
	
	private static Scanner s;
	
	public static void main(String[] args) {
		s = new Scanner(System.in);
		System.out.println("Quanti elementi vuoi instanziare?");
		int nElementi = s.nextInt();
		
		arr = new ElementoMultimediale[nElementi];
		
		for(int i = 0; i < nElementi; i++) {
			arr[1] = askForNewElement();
		}
		
		boolean end = true;
		do {
		
		System.out.println("Su quale elemento agire?");
		int j = s.nextInt();
		System.out.println("Quale funzione eseguire?");
		
		System.out.println("1 - PLAY/SHOW");
		if(arr[j] instanceof ElementoRiproducibile) {
			System.out.println("2 - + Volume");
			System.out.println("3 - - Volume");
		}
		if(arr[j] instanceof Luminosita) {
			System.out.println("4 - + Luminosita");
			System.out.println("5 - - Luminosita");
		}
		
		
		
		int comando = s.nextInt();
		switch(comando) {
		case 0: {
			end = false;
			break;
		}
		
		case 1: {
			if (arr[j] instanceof Immagine) {
				((Immagine) arr[j]).show();
			} else {
				((ElementoRiproducibile) arr[j]).play();
			}
			break;
		}
		}
		
	}while(end);
	}
	
	private static ElementoMultimediale askForNewElement() {
		
		do {
		System.out.println("Che tipologia è l'elemento?");
		System.out.println("1 -> Immagine");
		System.out.println("2 -> Video");
		System.out.println("3 -> Audio");
		int type = s.nextInt();
		
		System.out.println("Inserire titolo");
		String titolo = s.nextLine();
		
		switch(type) {
		case 1: {
			return new Immagine(titolo, type );
				
		}
		case 2: {
			return new Video(titolo, type, type, type);
				
		}
		case 3: {
			return new Audio(titolo, type, type);
				
		}
		 default: {
			System.out.println("Valore non accettato");
		}
		}
	    } while(true);
		
		
		
		}
}
