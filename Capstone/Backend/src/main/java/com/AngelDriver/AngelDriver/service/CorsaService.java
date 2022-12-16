package com.AngelDriver.AngelDriver.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.AngelDriver.AngelDriver.repository.CorsaRepository;

@Service
public class CorsaService {

	@Autowired
	CorsaRepository cr;
	
}
