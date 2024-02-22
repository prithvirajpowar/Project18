package com.example.siddhimobiles.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name="Supplier")
public class Suppliers {
	@Id
	@Column(name="Supplier_ID")
	private String supplierId;
	@Column(name="Supplier_Name")
	private String supplierName;
	@Column(name="Supplier_Email")
	private String supplierEmail;
	public Suppliers() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Suppliers(String supplierId, String supplierName, String supplierEmail) {
		super();
		this.supplierId = supplierId;
		this.supplierName = supplierName;
		this.supplierEmail = supplierEmail;
	}
	public String getSupplierId() {
		return supplierId;
	}
	public void setSupplierId(String supplierId) {
		this.supplierId = supplierId;
	}
	public String getSupplierName() {
		return supplierName;
	}
	public void setSupplierName(String supplierName) {
		this.supplierName = supplierName;
	}
	public String getSupplierEmail() {
		return supplierEmail;
	}
	public void setSupplierEmail(String supplierEmail) {
		this.supplierEmail = supplierEmail;
	}
	@Override
	public String toString() {
		return "Suppliers [supplierId=" + supplierId + ", supplierName=" + supplierName + ", supplierEmail="
				+ supplierEmail + "]";
	}
	
	
}