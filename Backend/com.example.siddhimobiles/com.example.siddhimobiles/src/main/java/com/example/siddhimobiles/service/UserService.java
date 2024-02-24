package com.example.siddhimobiles.service;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.AutoConfiguration;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Shops;
import com.example.siddhimobiles.entity.User;
import com.example.siddhimobiles.repository.UserRepository;

@Service
public class UserService {
	@Autowired
	private UserRepository userRepositoryRef;
	
	private List<User> store = new ArrayList<>();
	
	
	public List<User> getUsers(){
		return this.store;
	}
	public void addNewUser(User userRef) {
		userRepositoryRef.save(userRef);
	}
	
	public void deleteUser(String id) {
		userRepositoryRef.deleteById(id);
	}

}
