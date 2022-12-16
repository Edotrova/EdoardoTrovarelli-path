package com.AngelDriver.AngelDriver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AngelDriver.AngelDriver.repository.SedeControlloRepository;

@Service
public class SedeControlloService {

	@Autowired
	SedeControlloRepository sr;
}
