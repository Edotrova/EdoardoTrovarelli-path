package models;

import javax.management.Query;
import javax.persistence.EntityManager;
import javax.persistence.EntityTransaction;

public class ElementoLetterarioDAO {

	public static void aggiungiElemento(ElementoLetterario el) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			EntityTransaction t = em.getTransaction();
			t.begin();
			em.persist(el);
			t.commit();
		}catch (Exception e) {
			
		}finally {
			em.close();
		}
		
	}
	
	
	public static void deleteISBN(String ISBN) {
		EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
		try {
			//Query q = em.createQuery("SELECT e from ElementoLetterario e WHERE e.ISBN = :ISBN");
			//q.setParameter("ISBN", ISBN);
			
			//ElementoLetterario el =(ElementoLetterario) q.getSingleResult();
			ElementoLetterario el = em.find(ElementoLetterario.class, ISBN);
			EntityTransaction t =em.getTransaction();
			t.begin();
			em.remove(el);
			t.commit();
		}finally {
			em.close();
		}
		public static void save (ElementoLetterario el) {
			EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
			
			
			ElementoLetterario found = em.find(ElementoLetterario.class, el.id);
			if(found) {
				//persist
			}
		}
		
		public static List<ElementoLetterario> ricercaTitolo(String titolo){
			EntityManager em = JpaUtil.getEntityManagerFactory().createEntityManager();
			Query q = em.createQuery("SELECT e FROM ElementoLetterario e WHERE e.titolo LIKE %:titolo%");
			q.setParameter("titolo", "%"+titolo+"%");
		}
	}
}
