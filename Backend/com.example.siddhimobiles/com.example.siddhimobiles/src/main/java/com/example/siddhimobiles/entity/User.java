package com.example.siddhimobiles.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
@Entity
@Getter
@Setter
@AllArgsConstructor
@Table(name="User")
public class User {
	@Id
	private String userId;
	private String name;
	private String email;
	private String password;
	public User() {
		// TODO Auto-generated constructor stub
	}
	
	
	

}
