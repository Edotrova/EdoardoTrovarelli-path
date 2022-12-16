package com.AngelDriver.AngelDriver.security;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.AngelDriver.AngelDriver.entities.User;
import com.AngelDriver.AngelDriver.repository.UserRepository;


@Service
public class UserDetailsServiceImpl {

	@Autowired
	UserRepository ur;


	public UserDetails loadUserByEmail(String Email) throws Exception {
		Optional<User> user = ur.findByEmail(Email);

		if (user.isPresent()) {
			return UserDetailsImpl.build(user.get());
		} else {
			throw new Exception("User Not Found with email: " + Email);
		}
	}

	
}
