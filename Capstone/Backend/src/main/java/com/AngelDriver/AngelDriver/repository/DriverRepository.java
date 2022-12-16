package com.AngelDriver.AngelDriver.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.AngelDriver.AngelDriver.entities.Driver;


public interface DriverRepository extends JpaRepository<Driver, Long> {

	 Optional<Driver> findById(int id);
	
}
