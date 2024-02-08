package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Suppliers;

public interface SupplierRepository extends JpaRepository<Suppliers, Integer> {

}
