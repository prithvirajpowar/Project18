package com.review_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Payment")
public class Payment {
	@Id
	@Column(name="Payment_Id")
	private String paymentId;
	
	@Column(name="Payment_Type")
	private String paymentType;

	public Payment() {
	}

	public Payment(String paymentId, String paymentType) {
		super();
		this.paymentId = paymentId;
		this.paymentType = paymentType;
	}

	public String getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(String paymentId) {
		this.paymentId = paymentId;
	}

	public String getPaymentType() {
		return paymentType;
	}

	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentType=" + paymentType + "]";
	}
	
	
	
	

}
