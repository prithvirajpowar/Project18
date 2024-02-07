package com.review_api.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Products")
public class Product {
	@Id
	@Column(name="product_id")
	private String productId;
	
	@Column(name="product_name")
	private String productName;
	
	@Column(name="product_model")
	private String productModel;
	
	@Column(name="product_quantity")
	private int quantity;
	
	@Column(name="product_price")
	private double price;
	
	@Column(name="available_colors")
	private String avaliableColor;
	
	@Column(name="discount")
	private double discount;
	
	@Column(name="unit_In_Stock")
	private int unitInStock;
	
	@Column(name="unit_On_Stock")
	private int unitOnOrder;
	
	@Column(name="Current_Order")
	private String CurrOrderId;
	
	@Column(name="product_name")
	private byte productImage;
	
	@OneToOne
	private Category category;

	
	public Product() {
	}


	public Product(String productId, String productName, String productModel, int quantity, double price,
			String avaliableColor, double discount, int unitInStock, int unitOnOrder, String currOrderId,
			byte productImage, Category category) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productModel = productModel;
		this.quantity = quantity;
		this.price = price;
		this.avaliableColor = avaliableColor;
		this.discount = discount;
		this.unitInStock = unitInStock;
		this.unitOnOrder = unitOnOrder;
		CurrOrderId = currOrderId;
		this.productImage = productImage;
		this.category = category;
	}


	public String getProductId() {
		return productId;
	}


	public void setProductId(String productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}


	public String getProductModel() {
		return productModel;
	}


	public void setProductModel(String productModel) {
		this.productModel = productModel;
	}


	public int getQuantity() {
		return quantity;
	}


	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}


	public double getPrice() {
		return price;
	}


	public void setPrice(double price) {
		this.price = price;
	}


	public String getAvaliableColor() {
		return avaliableColor;
	}


	public void setAvaliableColor(String avaliableColor) {
		this.avaliableColor = avaliableColor;
	}


	public double getDiscount() {
		return discount;
	}


	public void setDiscount(double discount) {
		this.discount = discount;
	}


	public int getUnitInStock() {
		return unitInStock;
	}


	public void setUnitInStock(int unitInStock) {
		this.unitInStock = unitInStock;
	}


	public int getUnitOnOrder() {
		return unitOnOrder;
	}


	public void setUnitOnOrder(int unitOnOrder) {
		this.unitOnOrder = unitOnOrder;
	}


	public String getCurrOrderId() {
		return CurrOrderId;
	}


	public void setCurrOrderId(String currOrderId) {
		CurrOrderId = currOrderId;
	}


	public byte getProductImage() {
		return productImage;
	}


	public void setProductImage(byte productImage) {
		this.productImage = productImage;
	}


	public Category getCategory() {
		return category;
	}


	public void setCategory(Category category) {
		this.category = category;
	}


	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productModel=" + productModel
				+ ", quantity=" + quantity + ", price=" + price + ", avaliableColor=" + avaliableColor + ", discount="
				+ discount + ", unitInStock=" + unitInStock + ", unitOnOrder=" + unitOnOrder + ", CurrOrderId="
				+ CurrOrderId + ", productImage=" + productImage + ", category=" + category + "]";
	}
	
	
	
	
	
	

}
