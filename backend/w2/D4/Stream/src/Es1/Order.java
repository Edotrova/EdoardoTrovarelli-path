package Es1;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

public class Order {

	public Long id;
	public String status;
	public LocalDate orderDate;
	public LocalDate deliveryDate;
	public List <Product> prodotti;
	public Customer customer;
	
	public List<Product> getProdotti() {
		return prodotti;
	}


	public void setProdotti(List<Product> prodotti) {
		this.prodotti = prodotti;
	}
	
	public List <Product> filtraProdotti() {
	
		
		List<Product> libri = new ArrayList<>();
		
		List<Product> a = libri.stream().filter(x -> x.getCategory().equals("libri")).collect(Collectors.toList());
		
		return a;
		
		
		
	}

	
}
