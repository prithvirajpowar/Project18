package com.review_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Category")
public class Category {
	@Id
	@Column(name = "category_id")
	private String categoryId;
	@Column(name = "category_name")
	private String categoryName;
	@Column(name = "category_description")
	private String description;
	@Column(name = "category_image")
	private byte categoryImg;
	public Category() {
		
		// TODO Auto-generated constructor stub
	}
	public Category(String categoryId, String categoryName, String description, byte categoryImg) {
		super();
		this.categoryId = categoryId;
		this.categoryName = categoryName;
		this.description = description;
		this.categoryImg = categoryImg;
	}
	public String getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public byte getCategoryImg() {
		return categoryImg;
	}
	public void setCategoryImg(byte categoryImg) {
		this.categoryImg = categoryImg;
	}
	@Override
	public String toString() {
		return "Category [categoryId=" + categoryId + ", categoryName=" + categoryName + ", description=" + description
				+ ", categoryImg=" + categoryImg + "]";
	}
	
	
	
	
	
}
