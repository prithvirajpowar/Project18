package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Enquiry;

public interface EnquiryRepository extends JpaRepository<Enquiry, Integer> {

}
