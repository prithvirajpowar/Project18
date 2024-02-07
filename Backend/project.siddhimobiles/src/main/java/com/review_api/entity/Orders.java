package com.review_api.entity;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class Orders {
	@Id
	@Column(name="Order_Id")
	private String OrderId;
	
	@OneToOne
	@Column(name="Order_Shop")
	private Shops orderShop;
	
	@Column(name="Order_Date")
	private Date orderDate;
	
	@Column(name="Order_Product")
	private Product orderProduct;
	
	@Column(name="Total_Quantity")
	private int orderTotalQuantity;
	
	@Column(name="Order_Location")
	private String orderLocation;
	
	@Column(name="Order_TotalPrice")
	private double orderTotalPrice;

	@OneToOne
	@Column(name="Order_Id")

	private Payment orderPayment;
	private boolean orderTransactStatus;
	
	
	public Orders() {
	}


	public Orders(String orderId, Shops orderShop, Date orderDate, Product orderProduct, int orderTotalQuantity,
			String orderLocation, double orderTotalPrice, Payment orderPayment, boolean orderTransactStatus) {
		super();
		OrderId = orderId;
		this.orderShop = orderShop;
		this.orderDate = orderDate;
		this.orderProduct = orderProduct;
		this.orderTotalQuantity = orderTotalQuantity;
		this.orderLocation = orderLocation;
		this.orderTotalPrice = orderTotalPrice;
		this.orderPayment = orderPayment;
		this.orderTransactStatus = orderTransactStatus;
	}


	public String getOrderId() {
		return OrderId;
	}


	public void setOrderId(String orderId) {
		OrderId = orderId;
	}


	public Shops getOrderShop() {
		return orderShop;
	}


	public void setOrderShop(Shops orderShop) {
		this.orderShop = orderShop;
	}


	public Date getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}


	public Product getOrderProduct() {
		return orderProduct;
	}


	public void setOrderProduct(Product orderProduct) {
		this.orderProduct = orderProduct;
	}


	public int getOrderTotalQuantity() {
		return orderTotalQuantity;
	}


	public void setOrderTotalQuantity(int orderTotalQuantity) {
		this.orderTotalQuantity = orderTotalQuantity;
	}


	public String getOrderLocation() {
		return orderLocation;
	}


	public void setOrderLocation(String orderLocation) {
		this.orderLocation = orderLocation;
	}


	public double getOrderTotalPrice() {
		return orderTotalPrice;
	}


	public void setOrderTotalPrice(double orderTotalPrice) {
		this.orderTotalPrice = orderTotalPrice;
	}


	public Payment getOrderPayment() {
		return orderPayment;
	}


	public void setOrderPayment(Payment orderPayment) {
		this.orderPayment = orderPayment;
	}


	public boolean isOrderTransactStatus() {
		return orderTransactStatus;
	}


	public void setOrderTransactStatus(boolean orderTransactStatus) {
		this.orderTransactStatus = orderTransactStatus;
	}


	@Override
	public String toString() {
		return "Orders [OrderId=" + OrderId + ", orderShop=" + orderShop + ", orderDate=" + orderDate
				+ ", orderProduct=" + orderProduct + ", orderTotalQuantity=" + orderTotalQuantity + ", orderLocation="
				+ orderLocation + ", orderTotalPrice=" + orderTotalPrice + ", orderPayment=" + orderPayment
				+ ", orderTransactStatus=" + orderTransactStatus + "]";
	}
	
	
	
	
	
}
