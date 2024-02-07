package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Orders;

public interface OrderRepository extends JpaRepository<Orders, Integer> {

}
