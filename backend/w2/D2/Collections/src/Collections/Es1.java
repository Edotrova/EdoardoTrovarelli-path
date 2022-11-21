package Collections;

import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
import java.util.Set;

public class Es1 {

	public static void main(String[] args) {
		
		Es1 es = new Es1();
		es.eseguiEsercizio();
		
		}
	public void eseguiEsercizio() {
	Scanner scanner = new Scanner(System.in);
	System.out.println("Inserisci un numero");
	Integer a =  Integer.parseInt(scanner.nextLine());
	Set <String> parole = new HashSet<>();
	for(int i = 0; i<a; i++) {
	
		
	System.out.println("Inserisci la parola");
	parole.add(scanner.nextLine());
	}
	
	System.out.println(parole.toString());
	
	Iterator <String> iterate_value = parole.iterator();
	for(String s : parole) {
		
	}
	
	
	
	}
}
