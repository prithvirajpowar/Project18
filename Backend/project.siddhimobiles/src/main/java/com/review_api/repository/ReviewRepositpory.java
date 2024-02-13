package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.siddhimobiles.entity.Review;

public interface ReviewRepositpory extends JpaRepository<Review, Integer> {

}
