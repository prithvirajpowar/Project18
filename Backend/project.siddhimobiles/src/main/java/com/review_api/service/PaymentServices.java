package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.review_api.entity.Payment;
import com.review_api.repository.PaymentRepository;
@Service
public class PaymentServices {
	@Autowired
	private PaymentRepository paymentRepositoryRef;
	
	public Collection<Payment> getAllPayment(){
		Collection<Payment> allPayment = paymentRepositoryRef.findAll();
		return allPayment;
	}
	
	public Payment getOnePayment(Integer id) {
		Payment foundPayment = null;
		Optional<Payment> opt = paymentRepositoryRef.findById(id);
		if(!opt.isEmpty())
			foundPayment = opt.get();
		return foundPayment;
	}
	
	public void addNewPayment(Payment paymentRef) {
		paymentRepositoryRef.save(paymentRef);
	}
	
	public void deleteOnePayment(Integer id) {
		paymentRepositoryRef.deleteById(id);
	}
}
