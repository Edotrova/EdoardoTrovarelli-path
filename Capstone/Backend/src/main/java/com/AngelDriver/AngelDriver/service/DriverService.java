package com.AngelDriver.AngelDriver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AngelDriver.AngelDriver.entities.Driver;
import com.AngelDriver.AngelDriver.repository.DriverRepository;

@Service
public class DriverService {

	@Autowired
	DriverRepository dr;
	
	public Driver save (Driver y) {
		return dr.save(y);
	}
}
