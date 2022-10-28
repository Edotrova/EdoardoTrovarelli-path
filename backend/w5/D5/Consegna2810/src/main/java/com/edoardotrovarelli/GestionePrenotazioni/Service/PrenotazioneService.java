package com.edoardotrovarelli.GestionePrenotazioni.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.edoardotrovarelli.GestionePrenotazioni.entities.Postazione;
import com.edoardotrovarelli.GestionePrenotazioni.entities.Prenotazione;
import com.edoardotrovarelli.GestionePrenotazioni.repositories.PostazioneRepository;
import com.edoardotrovarelli.GestionePrenotazioni.repositories.PrenotazioneRepository;

@Service
public class PrenotazioneService {

	@Autowired
	PrenotazioneRepository pre;
	
	public void savePrenotazione(Prenotazione pr) {
		pre.save(pr);
	}
	
	public List<Prenotazione> getAllPrenotazione(){
		return pre.findAll();
	}
	
	public void deletePrenotazioneById(long id) {
		pre.deleteById(id);
	}
	
	
}
