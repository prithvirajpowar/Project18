package com.review_api.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Enquiry;
import com.review_api.service.EnquiryServices;

@RestController
public class EnquiryController {
	@Autowired
	private EnquiryServices enquiryServiceref;
	
	@GetMapping("/enquiry")
	public Collection<Enquiry> getAllEnquiry() {
		Collection<Enquiry> allEnquiry = enquiryServiceref.getAllEnquiry();
		return allEnquiry;
	}

	@GetMapping("/enquiry/{enquiryId}")
	public Enquiry getOneEnquiry(@PathVariable("enquiryId") Integer id) {
		Enquiry foundEnquiry = enquiryServiceref.getOneEnquiry(id);
		return foundEnquiry;
	}

	@PostMapping("/enquiry")
	public void addNewEnquiry(@RequestBody Enquiry enquiryRef) {
		System.out.println(enquiryRef);
		enquiryServiceref.addNewEnquiry(enquiryRef);

	}

	@DeleteMapping("/enquiry/{enquiryId}")
	public void deleteOneEnquiry(@PathVariable("enquiryId") Integer id) {
		enquiryServiceref.deleteOneEnquiry(id);
	}
}
