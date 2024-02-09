
package com.example.siddhimobiles.entity;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Enquiry")
public class Enquiry {
	@Id
	@Column(name="enquiry_id")
	private String enquiryId;
	@OneToMany
	@JoinColumn(name="category_id")
	private List<Category> category;
	@Column(name="enquiry_description")
	private String description;
	@ManyToOne
	@JoinColumn(name="Shop_Id")
	private Shops shopId;

	public Enquiry() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Enquiry(String enquiryId, List<Category> category, String description, Shops shopId) {
		super();
		this.enquiryId = enquiryId;
		this.category = category;
		this.description = description;
		this.shopId = shopId;
	}

	public String getEnquiryId() {
		return enquiryId;
	}

	public void setEnquiryId(String enquiryId) {
		this.enquiryId = enquiryId;
	}

	public List<Category> getCategory() {
		return category;
	}

	public void setCategory(List<Category> category) {
		this.category = category;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Shops getShopId() {
		return shopId;
	}

	public void setShopId(Shops shopId) {
		this.shopId = shopId;
	}

	@Override
	public String toString() {
		return "Enquiry [enquiryId=" + enquiryId + ", category=" + category + ", description=" + description
				+ ", shopId=" + shopId + "]";
	}

	
}
