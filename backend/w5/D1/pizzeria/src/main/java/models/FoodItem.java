package models;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class FoodItem extends Item {

	private double calorie;
	
	public FoodItem(String n, double p, double c) {
		super(n, p);
		this.calorie = c;
		
	}

}
