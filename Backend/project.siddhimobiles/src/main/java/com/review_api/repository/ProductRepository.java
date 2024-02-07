package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
