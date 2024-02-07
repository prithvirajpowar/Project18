package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review_api.entity.Shops;
import com.review_api.repository.ShopsRepository;

@Service
public class ShopsServices {
	@Autowired
	private ShopsRepository shopsRepositoryRef;
	
	public Collection<Shops> getAllShops(){
		Collection<Shops> allShops = shopsRepositoryRef.findAll();
		return allShops;
	}
	
	public Shops getOneShops(Integer id) {
		Shops foundShops = null;
		Optional<Shops> opt = shopsRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundShops = opt.get();
		return foundShops;
	}
	
	public void addNewShops(Shops shopsRef) {
		shopsRepositoryRef.save(shopsRef);
	}
	
	public void deleteOneShops(Integer id) {
		shopsRepositoryRef.deleteById(id);
	}
}
