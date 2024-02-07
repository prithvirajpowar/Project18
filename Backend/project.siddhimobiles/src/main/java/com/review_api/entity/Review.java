package com.review_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Reviews")
public class Review {
	@Id
	@Column(name="reviewer_id")
	private int reviewerId;
	@Column(name="reviewer_name")
	private String reviewerName;
	@Column(name="reviewer_description")
	private String reviewDescription;
	@Column(name="reviewer_ratings")
	private int reviewRatings;

	public Review() {
		// TODO Auto-generated constructor stub
	}

	public Review(int reviewerId, String reviewerName, String reviewDescription, int reviewRatings) {
		super();
		this.reviewerId = reviewerId;
		this.reviewerName = reviewerName;
		this.reviewDescription = reviewDescription;
		this.reviewRatings = reviewRatings;
	}

	public int getReviewerId() {
		return reviewerId;
	}

	public void setReviewerId(int reviewerId) {
		this.reviewerId = reviewerId;
	}

	public String getReviewerName() {
		return reviewerName;
	}

	public void setReviewerName(String reviewerName) {
		this.reviewerName = reviewerName;
	}

	public String getReviewDescription() {
		return reviewDescription;
	}

	public void setReviewDescription(String reviewDescription) {
		this.reviewDescription = reviewDescription;
	}

	public int getReviewRatings() {
		return reviewRatings;
	}

	public void setReviewRatings(int reviewRatings) {
		this.reviewRatings = reviewRatings;
	}

	@Override
	public String toString() {
		return "Review [reviewerId=" + reviewerId + ", reviewerName=" + reviewerName + ", reviewDescription="
				+ reviewDescription + ", reviewRatings=" + reviewRatings + "]";
	}
	

}
