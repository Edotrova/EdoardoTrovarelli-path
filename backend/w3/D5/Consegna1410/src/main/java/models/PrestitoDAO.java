package models;

import javax.persistence.EntityManager;
import javax.persistence.Query;

public class PrestitoDAO {

	public static List<Prestito> prestitoByTessera(Long tessera){
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		Query q = em.createQuery("SELECT p FROM Prestito p WHERE p.utente.numeroTessera = tessera AND p.dataRestituzione IS NOT NULL");
		q.setParameter(0,  tessera);
	}
	
	public static List<Prestito> prestitiScadutiNonRestituiti(){
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		em.createQuery("SELECT p FROM Prestiti p WHERE p.dataRestituzione IS NOT NULL AND p.fineRestituzione < CURRENT_TIMESTAMP");
	}
}
