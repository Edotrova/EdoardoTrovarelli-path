package Esercizio;

import java.util.ArrayList;
import java.util.List;

public class Catalogo {
	
	List<Libri> l =new ArrayList<Libri>();  
	List<Riviste> r =new ArrayList<Riviste>(); 


	for(int i = 0; i < 5; i++) {
		l.add(Libri.generaLibro1());
		l.add(Libri.generaLibro2());
		l.add(Libri.generaLibro3());
	
	  
	   r.add(Riviste.generaRiviste1());

	   r.add(Riviste.generaRiviste2());

	   r.add(Riviste.generaRiviste3());
	   
	   
	   System.out.println(l);
		System.out.println(r);
}

	
	
}

}