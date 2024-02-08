package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review_api.entity.Suppliers;
import com.review_api.repository.SupplierRepository;

@Service
public class SupplierServices {
	@Autowired
	private SupplierRepository suppliersRepositoryRef;
	
	public Collection<Suppliers> getAllSuppliers(){
		Collection<Suppliers> allSuppliers = suppliersRepositoryRef.findAll();
		return allSuppliers;
	}
	
	public Suppliers getOneSuppliers(Integer id) {
		Suppliers foundSuppliers = null;
		Optional<Suppliers> opt = suppliersRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundSuppliers = opt.get();
		return foundSuppliers;
	}
	
	public void addNewSuppliers(Suppliers suppliersRef) {
		suppliersRepositoryRef.save(suppliersRef);
	}
	
	public void deleteOneSuppliers(Integer id) {
		suppliersRepositoryRef.deleteById(id);
	}
}
