package com.review_api.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.review_api.entity.Shippers;
import com.review_api.service.ShippersServices;



@RestController
public class ShippersController {
	@Autowired
	private ShippersServices shippersServiceRef;

	@GetMapping("/shippers")
	public Collection<Shippers> getAllShippers() {
		Collection<Shippers> allShippers = shippersServiceRef.getAllShippers();
		return allShippers;
	}

	@GetMapping("/shippers/{shippersId}")
	public Shippers getOneShippers(@PathVariable("shippersId") Integer id) {
		Shippers foundShippers = shippersServiceRef.getOneShippers(id);
		return foundShippers;
	}

	@PostMapping("/shippers")
	public void addNewShippers(@RequestBody Shippers shippersRef) {
		System.out.println(shippersRef);
		shippersServiceRef.addNewShippers(shippersRef);

	}

	@DeleteMapping("/shippers/{shippersId}")
	public void deleteOneShippers(@PathVariable("shippersId") Integer id) {
		shippersServiceRef.deleteOneShippers(id);
	}
}
