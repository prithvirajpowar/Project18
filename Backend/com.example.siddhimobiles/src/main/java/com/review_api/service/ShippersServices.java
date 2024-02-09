package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Shippers;
import com.review_api.repository.ShippersRepository;

@Service
public class ShippersServices {
	@Autowired
	private ShippersRepository shippersRepositoryRef;
	
	public Collection<Shippers> getAllShippers(){
		Collection<Shippers> allShippers = shippersRepositoryRef.findAll();
		return allShippers;
	}
	
	public Shippers getOneShippers(Integer id) {
		Shippers foundShippers = null;
		Optional<Shippers> opt = shippersRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundShippers = opt.get();
		return foundShippers;
	}
	
	public void addNewShippers(Shippers shippersRef) {
		shippersRepositoryRef.save(shippersRef);
	}
	
	public void deleteOneShippers(Integer id) {
		shippersRepositoryRef.deleteById(id);
	}
}
