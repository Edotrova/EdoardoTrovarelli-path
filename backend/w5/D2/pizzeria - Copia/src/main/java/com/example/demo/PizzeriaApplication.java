package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import models.Menu;

@SpringBootApplication
public class PizzeriaApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(PizzeriaApplication.class, args);
		
		System.out.print("Hello world");
		
		
		Menu m = new Menu("M1");
		
		System.out.println(m);
	}



}
