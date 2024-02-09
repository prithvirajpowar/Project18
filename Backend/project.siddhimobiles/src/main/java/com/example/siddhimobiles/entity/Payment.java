package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

//@Entity
@Table(name="payment")
public class Payment {
	@Id
	@Column(name="Payment_Id")
	private String paymentId;
	
	@Column(name="Payment_Type")
	private String paymentType;
	
	@Column(name="Payment_amount")
	private double paymentAmount;
	
//	@OneToOne
//	@JoinColumn(name="Order_Id")
//	private Orders orderId;

	public Payment() {
	}
	

	public Payment(String paymentId, String paymentType, Orders orderId) {
		super();
		this.paymentId = paymentId;
		this.paymentType = paymentType;
//		this.orderId = orderId;
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

	/*
	 * public Orders getOrderId() { return orderId; }
	 * 
	 * public void setOrderId(Orders orderId) { this.orderId = orderId; }
	 */

	@Override
	public String toString() {
		return "Payment [paymentId=" + paymentId + ", paymentType=" + paymentType + ", orderId=" +  "]";
	}

	
}
