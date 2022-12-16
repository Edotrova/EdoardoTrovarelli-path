package com.AngelDriver.AngelDriver.entities;

import java.time.LocalDate;
import java.util.Collection;
import java.util.HashSet;
import java.util.Set;



import org.springframework.security.core.GrantedAuthority;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.Table;
import jakarta.persistence.JoinColumn;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "users")
@NoArgsConstructor
@Getter
@Setter
@ToString
public class User {

	@Id
	@GeneratedValue
	public long id;
	public String firstname;
	public String lastname;
	public String email;
	public String password;
	public String luogoDiNascita;
	

	@ManyToMany 
	@Enumerated(EnumType.STRING)
    @JoinTable(name = "user_roles", 
    		joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
	@ToString.Exclude
    private Set<Role> roles = new HashSet<Role>();


	
	   private Boolean active = true;

	    public void addRole( Role r ) {

	        this.roles.add( r );

	    }
	

}
