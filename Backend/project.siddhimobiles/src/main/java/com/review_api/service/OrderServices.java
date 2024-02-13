package com.review_api.service;

import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Orders;
import com.review_api.repository.OrderRepository;


@Service
public class OrderServices {
	@Autowired
	private OrderRepository ordersRepositroyRef;
	
	public Collection<Orders> getAllOrders(){
		Collection<Orders> allOrders = ordersRepositroyRef.findAll();
		return allOrders;
	}
	
	public Orders getOneOrder(Integer id) {
		Orders foundOrder = null;
		Optional<Orders> opt = ordersRepositroyRef.findById(id);
		if(!opt.isEmpty())
			foundOrder = opt.get();
		return foundOrder;
	}
	
	public void addNewOrder(Orders orderRef) {
		ordersRepositroyRef.save(orderRef);
	}
	
	public void deleteOneOrder(Integer id) {
		ordersRepositroyRef.deleteById(id);
	}

}
