package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Shops;

public interface ShopsRepository extends JpaRepository<Shops, Integer> {

}
