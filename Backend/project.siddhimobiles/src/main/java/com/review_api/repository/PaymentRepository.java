package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer> {

}
