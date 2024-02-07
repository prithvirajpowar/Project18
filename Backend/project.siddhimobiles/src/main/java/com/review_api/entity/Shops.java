package com.review_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Shops")
public class Shops {
	@Id
	@Column(name="Shop_Id")
	private String shopId;
	
	@Column(name="Shop_Name")
	private String shopName;
	
	@Column(name="Owner_Name")
	private String ownerName;
	
	@Column(name="Shop_Address")
	private String shopAddress;
	
	@Column(name="Billing_Type")
	private String billingType;
	
	@Column(name="Shop_Billing_Address")
	private String billingAddress;
	
	@OneToOne
	private Review review;

	public Shops() {
	}

	public Shops(String shopId, String shopName, String ownerName, String shopAddress, String billingType,
			String billingAddress, Review review) {
		super();
		this.shopId = shopId;
		this.shopName = shopName;
		this.ownerName = ownerName;
		this.shopAddress = shopAddress;
		this.billingType = billingType;
		this.billingAddress = billingAddress;
		this.review = review;
	}

	public String getShopId() {
		return shopId;
	}

	public void setShopId(String shopId) {
		this.shopId = shopId;
	}

	public String getShopName() {
		return shopName;
	}

	public void setShopName(String shopName) {
		this.shopName = shopName;
	}

	public String getOwnerName() {
		return ownerName;
	}

	public void setOwnerName(String ownerName) {
		this.ownerName = ownerName;
	}

	public String getShopAddress() {
		return shopAddress;
	}

	public void setShopAddress(String shopAddress) {
		this.shopAddress = shopAddress;
	}

	public String getBillingType() {
		return billingType;
	}

	public void setBillingType(String billingType) {
		this.billingType = billingType;
	}

	public String getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(String billingAddress) {
		this.billingAddress = billingAddress;
	}

	public Review getReview() {
		return review;
	}

	public void setReview(Review review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "Shops [shopId=" + shopId + ", shopName=" + shopName + ", ownerName=" + ownerName + ", shopAddress="
				+ shopAddress + ", billingType=" + billingType + ", billingAddress=" + billingAddress + ", review="
				+ review + "]";
	}
	
	


	

	
	

}
