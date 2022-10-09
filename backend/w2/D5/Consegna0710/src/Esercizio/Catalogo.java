package Esercizio;

import java.io.File;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.stream.Collectors;

public class Catalogo {
	
	private static Scanner s = new Scanner (System.in);
	
	
	private File file;
	
	List<Volume> volume;
	
	public Catalogo(String nome) {
	
	this.volume = new ArrayList<Volume>();
	this.file = new File(nome + ".txt");
	}
	
	public void nuovoVolume() {
		System.out.println("Che oggetto vuoi creare?\r1-Libro\r2-Rivista");
		int tipo  = Integer.valueOf(s.nextLine());
		
		long codiceISBN;
		do {
		System.out.println("Inserire ISBN");
		 codiceISBN = Long.valueOf(s.nextLine());
		} while(this.getVolumecodiceISBN(codiceISBN) != null);
		System.out.println("Inserire titolo");
		String titolo = s.nextLine();
		
		System.out.println("Inserire anno");
		int annoPubblicazione = Integer.valueOf(s.nextLine());
		
		System.out.println("Inserire pagine");
		int numeroPagine = Integer.valueOf(s.nextLine());
		
		
		
		

		
		if(tipo == 1) {
			System.out.println("Inserire genere");
			Genere g = Genere.getFromString(s.nextLine());
			
			System.out.println("Inserire autore");
			String autore = s.nextLine();
			
			addLibro(codiceISBN, titolo, annoPubblicazione, numeroPagine,autore, g);
		}else {
			System.out.println("Inserire periodicita");
			Periodicita p = Periodicita.getFromString(s.nextLine());
			
			addRivista(codiceISBN, titolo, annoPubblicazione, numeroPagine, p);
		}
	}
	


private void addLibro(long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, String autore, Genere g) {
	
	this.volume.add(new Libri(codiceISBN, titolo, annoPubblicazione, numeroPagine,autore, g));
}


private void addRivista(long codiceISBN, String titolo, int annoPubblicazione, int numeroPagine, Periodicita p) {
	this.volume.add(new Riviste(codiceISBN, titolo, annoPubblicazione, numeroPagine, p));
}

public Volume getVolumecodiceISBN(long codiceISBN) {
	List<Volume> l = volume.stream().filter(i -> i.getISBN() == codiceISBN).collect(Collectors.toList());
	
	if(l.size() > 0) {
		
		return l.get(0);
	}
	
		return null;
	}

public List <Volume> getVolumeAnno(int a){
	
	return volume.stream().filter(i -> i.getAnno() == a).collect(Collectors.toList());
}

public List <Volume> getAutore (String a){
	
	return volume.stream()
	.filter(i -> i instanceof Libri)
	.filter(i -> ((Libri)i).getAutore() == a)
	.collect(Collectors.toList());
}
	

public void salvaCatalogo() {
	
	String content = "";
	for(Volume i : volume) {
		content += i + "\r";
	}
	if(file.exists()) {
		FileUtils.writeStringToFile(file, content ,'UTF-8');
	}
}

public void leggiCatalogo() {
	String res = readFileToString(file,'UTF-8' );
	List<String> righe = res.split("\r");
	for(String r : righe) {
		List<String> data = r.split (",");
		if(data.get(0)) == "L") this.addLibro(Integer.valueOf(data[1]), data[2],Integer.valueOf(data[3]), Integer.valueOf(data[4]), Genere.Integer.valueOf(data[5]), data[6])
else this.addRivista(Integer.valueOf(data[1]), data[2], Integer.valueOf(data[3]), Integer.valueOf(data[4]) , Periodicita.getFromString(data[5]));
	}
}

public void rimuoviVolume (long codiceISBN) {
	if(this.getVolumecodiceISBN(codiceISBN) != null) {
	volume = volume.stream()
			.filter(i -> i.getISBN() != codiceISBN)
			.collect(Collectors.toList());
		System.out.println("Elemento eliminato");
	}
}

}


	
	


