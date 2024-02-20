package com.example.siddhimobiles.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Product;
import com.example.siddhimobiles.service.ProductServices;


@RestController
public class ProductController {
	@Autowired
	private ProductServices productServiceRef;

	@GetMapping("/product")
	public Collection<Product> getAllProduct() {
		Collection<Product> allProduct = productServiceRef.getAllProducts();
		return allProduct;
	}

	@GetMapping("/product/{productId}")
	public Product getOneProduct(@PathVariable("productId") String id) {
		Product foundProduct = productServiceRef.getOneProduct(id);
		return foundProduct;
	}

	@PostMapping("/product")
	public void addNewProduct(@RequestBody Product productRef) {
		System.out.println(productRef);
		productServiceRef.addNewProduct(productRef);

	}

	@DeleteMapping("/product/{productId}")
	public void deleteOneProduct(@PathVariable("productId") String id) {
		productServiceRef.deleteOneProduct(id);
	}
}
