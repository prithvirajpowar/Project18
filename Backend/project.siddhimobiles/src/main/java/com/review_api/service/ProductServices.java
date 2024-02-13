package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Product;
import com.review_api.repository.ProductRepository;
@Service
public class ProductServices {
	@Autowired
	private ProductRepository productRepositoryRef;
	
	public Collection<Product> getAllProducts(){
		Collection<Product> allProducts = productRepositoryRef.findAll();
		return allProducts;
	}
	
	public Product getOneProduct(Integer id) {
		Product foundProduct = null;
		Optional<Product> opt = productRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundProduct = opt.get();
		return foundProduct;
	}
	
	public void addNewProduct(Product productRef) {
		productRepositoryRef.save(productRef);
	}
	
	public void deleteOneProduct(Integer id) {
		productRepositoryRef.deleteById(id);
	}
}
