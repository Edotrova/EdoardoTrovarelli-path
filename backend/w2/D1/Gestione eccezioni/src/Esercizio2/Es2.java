package Esercizio2;

import java.util.Scanner;

public class Es2 {

	public static void main(String[] args) {
	
		calcoloConsumo();
	}
	
	
	
	
	public static void calcoloConsumo(){
		
		
		try {
		Scanner scanner = new Scanner(System.in);
		System.out.println("Quanti km hai percorso?");
		String km = scanner.nextLine();
		int kmI = Integer.parseInt(km);
		System.out.println("Quanti litri di benzina hei messo?");
		String l = scanner.nextLine();
		int lI = Integer.parseInt(l);
		int risultato = kmI/lI;
		System.out.println ("Il tuo consumo è di " + risultato + " km per litro");
		}
		catch(Exception e) {
			System.out.println("Valore inserito non corretto");
		}
		}

}
