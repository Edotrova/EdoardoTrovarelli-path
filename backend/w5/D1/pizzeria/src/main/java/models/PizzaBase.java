package models;

import java.util.List;

public class PizzaBase extends Pizza{

	public PizzaBase() {
		super("Pizza", 5d, 25d);
	}
	
	@Override
	public List<Topping> getTuttiIngredienti() {
		return this.getIngredienti();
	}
}
