package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Enquiry;
import com.review_api.repository.EnquiryRepository;

@Service
public class EnquiryServices {
	@Autowired
	private EnquiryRepository enquiryRepositoryRef;
	
	public Collection<Enquiry> getAllEnquiry() {
		Collection<Enquiry> allEnquiry = enquiryRepositoryRef.findAll();
		return allEnquiry;
	}

	public Enquiry getOneEnquiry(Integer id) {
		Enquiry foundEnquiry = null;
		Optional<Enquiry> opt = enquiryRepositoryRef.findById(id);
		if (!opt.isEmpty())
			foundEnquiry = opt.get();
		return foundEnquiry;
	}

	public void addNewEnquiry(Enquiry enquiryRef) {
		enquiryRepositoryRef.save(enquiryRef);
	}

	public void deleteOneEnquiry(Integer id) {
		enquiryRepositoryRef.deleteById(id);
	}
}
