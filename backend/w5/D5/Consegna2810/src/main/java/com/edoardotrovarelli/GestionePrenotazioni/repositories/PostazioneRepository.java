package com.edoardotrovarelli.GestionePrenotazioni.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.edoardotrovarelli.GestionePrenotazioni.entities.Postazione;

@Repository
public interface PostazioneRepository extends JpaRepository <Postazione, Long>{

}
