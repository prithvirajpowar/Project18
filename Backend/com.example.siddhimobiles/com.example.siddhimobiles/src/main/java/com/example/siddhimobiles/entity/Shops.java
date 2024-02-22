package com.example.siddhimobiles.entity;

import java.util.Collection;
import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Shops")
public class Shops {
	@Id
	@Column(name="Shop_Id")
	private long shopId;
	
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
	@JoinColumn(name="reviewId")
	private Review reviewerId;
	
	@OneToMany
	@JoinColumn(name="Order_id", nullable=true)
	private List<Orders> orders;
	
	

}
