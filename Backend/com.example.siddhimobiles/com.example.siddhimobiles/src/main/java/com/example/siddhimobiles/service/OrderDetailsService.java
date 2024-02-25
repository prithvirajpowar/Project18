package com.example.siddhimobiles.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.OrderDetails;
import com.example.siddhimobiles.repository.OrderDetailsRepository;
@Service
public class OrderDetailsService {
	private final OrderDetailsRepository orderDetailsRepository;

	@Autowired
	public OrderDetailsService(OrderDetailsRepository orderDetailsRepository) {
		this.orderDetailsRepository = orderDetailsRepository;
	}

	public OrderDetails saveOrderDetail(OrderDetails orderDetail) {
		return orderDetailsRepository.save(orderDetail);
	}

	public Optional<OrderDetails> getOrderDetailById(Long id) {
		return orderDetailsRepository.findById(id);
	}

	public List<OrderDetails> getOrderDetailsByOrderId(Long orderId) {
	    return orderDetailsRepository.findByOrderId(orderId);
	}


	public void deleteOrderDetail(Long id) {
		orderDetailsRepository.deleteById(id);
	}
}
