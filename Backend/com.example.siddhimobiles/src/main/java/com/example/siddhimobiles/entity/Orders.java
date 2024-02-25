package com.example.siddhimobiles.entity;

import java.sql.Date;
import java.util.List;
import java.util.Set;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.persistence.Temporal;
import jakarta.persistence.TemporalType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name="Orders")
public class Orders {

	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    @Column(name = "order_id")
	    private Long id;

	    @Column(name = "order_date")
	    private Date orderDate;

	    @Column(name = "order_total_price")
	    private Double orderTotalPrice;

	    @Column(name = "order_status")
	    private String orderStatus;

	    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
	    private Set<OrderDetails> orderDetails;
	    
	    @ManyToOne(fetch = FetchType.LAZY)
	    @JoinColumn(name = "Shop_Id")
	    private Shops shop;

	
	    public Orders() {
	    }

	    
	}

