package com.example.siddhimobiles.entity;

import java.util.Arrays;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name="Products")
public class Product {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="product_id")
	private Long productId;
	
	@Column(name="product_name")
	private String productName;
	
	@Lob
	@Column(name="product_img",columnDefinition = "BLOB")
	private String productImg;
	
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
		
	@OneToOne
	@JoinColumn(name="category_id")
	private Category category;
	
	@ManyToOne
	@JoinColumn(name="Supplier_ID")
	private	Suppliers supplierId;
	
	
	public Product() {
	}


	public Product(Long productId, String productName, String productImg, String productModel, int quantity,
			double price, String avaliableColor, double discount, int unitInStock,
			Category category, Suppliers supplierId) {
		super();
		this.productId = productId;
		this.productName = productName;
		this.productImg = productImg;
		this.productModel = productModel;
		this.quantity = quantity;
		this.price = price;
		this.avaliableColor = avaliableColor;
		this.discount = discount;
		this.unitInStock = unitInStock;
		this.category = category;
		this.supplierId = supplierId;
	}




	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}


	public void setProductName(String productName) {
		this.productName = productName;
	}




	public String getProductImg() {
		return productImg;
	}




	public void setProductImg(String productImg) {
		this.productImg = productImg;
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




	public Category getCategory() {
		return category;
	}




	public void setCategory(Category category) {
		this.category = category;
	}




	public Suppliers getSupplierId() {
		return supplierId;
	}




	public void setSupplierId(Suppliers supplierId) {
		this.supplierId = supplierId;
	}




	@Override
	public String toString() {
		return "Product [productId=" + productId + ", productName=" + productName + ", productImg="
				+ productImg + ", productModel=" + productModel + ", quantity=" + quantity + ", price="
				+ price + ", avaliableColor=" + avaliableColor + ", discount=" + discount + ", unitInStock="
				+ unitInStock + ", unitOnOrder=" + ",  category=" + category
				+ ", supplierId=" + supplierId + "]";
	}




	
}