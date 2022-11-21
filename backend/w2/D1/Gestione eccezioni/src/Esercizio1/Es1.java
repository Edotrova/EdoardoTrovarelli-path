package Esercizio1;

import java.util.Scanner;

public class Es1 {


	
	public static void main(String[] args) {
	
		Scanner scanner = new Scanner(System.in);
		
		int[] numeri = {1,2,3,4,5,6,7,8,9,10};	
	
		try {
		System.out.println("Inserire un numero da 1 a 10");
		String a = scanner.nextLine();
		int intero = Integer.parseInt(a);
		System.out.println( numeri[intero]);}
		
		catch(ArithmeticException e) {
			System.out.print("non esiste il numero zero");
		}
		
		catch(ArrayIndexOutOfBoundsException e) {
			System.out.print("Hai superato il limite dell'array");
		}


}
}