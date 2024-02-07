package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Shippers;

public interface ShippersRepository extends JpaRepository<Shippers, Integer> {

}
