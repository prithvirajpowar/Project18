package com.example.siddhimobiles.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Product;
import com.example.siddhimobiles.repository.ProductRepository;
@Service
public class ProductServices {
	@Autowired
	private ProductRepository productRepositoryRef;
	
	
	
	public Collection<Product> getAllProducts(){
		Collection<Product> allProducts = productRepositoryRef.findAll();
		return allProducts;
	}
	
	public Product getOneProduct(Long id) {
		Product foundProduct = null;
		Optional<Product> opt = productRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundProduct = opt.get();
		return foundProduct;
	}
	
	public Product addNewProduct(Product productRef) {
		return productRepositoryRef.save(productRef);
	}
	
	public void deleteOneProduct(Long id) {
		productRepositoryRef.deleteById(id);
	}
}
