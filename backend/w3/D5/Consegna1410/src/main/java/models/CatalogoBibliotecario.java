package models;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class CatalogoBibliotecario {

	private static final Logger logger = LoggerFactory.getLogger(CatalogoBibliotecario.class);
	
	private static final String FILE_PATH = "c:\\epicode\\catalogobibliotecario.txt";
	
	private Map<String, ElementoLetterario< archivio;
	
	public CatalogoBibliotecario() {
		this.archivio = new HashMap<String, ElementoLetterario>();
	}
	
	public void aggiungi(ElementoLetterario nuovoElemento) {
		archivio.put(nuovoElemento.getISBN(), nuovoElemento);
		
		logger.info("Elemento aggiunto in archivio.ISBN: {} - Anno Pubblicazione: {}", nuovoElemento.getISBN());
	}
	
	public void rimuovi(String ISBN) {
		ElementoLetterario elementoRimosso = archivio.remove(ISBN);
		if (elementoRimosso != null)
		logger.info("Elemento aggiunto in archivio.ISBN: {} - Anno Pubblicazione: {}", elementoRimosso.getISBN());
	}
	
	public ElementoLetterario ricercaPerIsbn(String ISBN) {
		return archivio.get(ISBN);
	}
	
}
