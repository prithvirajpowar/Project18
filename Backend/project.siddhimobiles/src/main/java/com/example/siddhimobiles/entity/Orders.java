package com.example.siddhimobiles.entity;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Orders")
public class Orders {
	@Id
	@Column(name="Order_Id")
	private String orderId;
	
	@ManyToOne
	@JoinColumn(name="shopId")
	private Shops shopId;
	
	@Column(name="Order_Date")
	private Date orderDate;
	
	@OneToMany
	@JoinColumn(name="Products")
	private List<Product> products;
	
	@Column(name="Total_Quantity")
	private int orderTotalQuantity;
	
	@Column(name="Order_Location")
	private String orderLocation;
	
	@Column(name="Order_TotalPrice")
	private double orderTotalPrice;
	
	@OneToOne
	@JoinColumn(name="shipperId")
	private Shippers shipperId;

	private Payment paymentId;
	private boolean orderTransactStatus;
	
	@OneToOne
	@JoinColumn(name="review")
	private Review reviewId;
	
	
	public Orders() {
	}


	public Orders(String orderId, Shops shopId, Date orderDate, List<Product> products, int orderTotalQuantity,
			String orderLocation, double orderTotalPrice, Shippers shipperId, Payment paymentId,
			boolean orderTransactStatus, Review reviewId) {
		super();
		this.orderId = orderId;
		this.shopId = shopId;
		this.orderDate = orderDate;
		this.products = products;
		this.orderTotalQuantity = orderTotalQuantity;
		this.orderLocation = orderLocation;
		this.orderTotalPrice = orderTotalPrice;
		this.shipperId = shipperId;
		this.paymentId = paymentId;
		this.orderTransactStatus = orderTransactStatus;
		this.reviewId = reviewId;
	}


	public String getOrderId() {
		return orderId;
	}


	public void setOrderId(String orderId) {
		this.orderId = orderId;
	}


	public Shops getShopId() {
		return shopId;
	}


	public void setShopId(Shops shopId) {
		this.shopId = shopId;
	}


	public Date getOrderDate() {
		return orderDate;
	}


	public void setOrderDate(Date orderDate) {
		this.orderDate = orderDate;
	}


	public List<Product> getProducts() {
		return products;
	}


	public void setProducts(List<Product> products) {
		this.products = products;
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


	public Shippers getShipperId() {
		return shipperId;
	}


	public void setShipperId(Shippers shipperId) {
		this.shipperId = shipperId;
	}


	public Payment getPaymentId() {
		return paymentId;
	}


	public void setPaymentId(Payment paymentId) {
		this.paymentId = paymentId;
	}


	public boolean isOrderTransactStatus() {
		return orderTransactStatus;
	}


	public void setOrderTransactStatus(boolean orderTransactStatus) {
		this.orderTransactStatus = orderTransactStatus;
	}


	public Review getReviewId() {
		return reviewId;
	}


	public void setReviewId(Review reviewId) {
		this.reviewId = reviewId;
	}


	@Override
	public String toString() {
		return "Orders [orderId=" + orderId + ", shopId=" + shopId + ", orderDate=" + orderDate + ", products="
				+ products + ", orderTotalQuantity=" + orderTotalQuantity + ", orderLocation=" + orderLocation
				+ ", orderTotalPrice=" + orderTotalPrice + ", shipperId=" + shipperId + ", paymentId=" + paymentId
				+ ", orderTransactStatus=" + orderTransactStatus + ", reviewId=" + reviewId + "]";
	}
	


	
	

}