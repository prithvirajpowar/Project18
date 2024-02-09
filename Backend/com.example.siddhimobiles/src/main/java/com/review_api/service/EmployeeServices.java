package com.review_api.service;


import java.util.Collection;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.siddhimobiles.entity.Employee;
import com.review_api.repository.EmployeeRepository;




@Service
public class EmployeeServices {
	@Autowired
	private EmployeeRepository employeeRepositroyRef;
	
	public Collection<Employee> getAllEmployee(){
		Collection<Employee> allEmployee = employeeRepositroyRef.findAll();
		return allEmployee;
	}
	
	public Employee getOneEmployee(Integer id) {
		Employee foundEmployee = null;
		Optional<Employee> opt = employeeRepositroyRef.findById(id);
		if(!opt.isEmpty())
			foundEmployee = opt.get();
		return foundEmployee;
	}
	
	public void addNewEmployee(Employee employeeRef) {
		employeeRepositroyRef.save(employeeRef);
	}
	
	public void deleteOneEmployee(Integer id) {
		employeeRepositroyRef.deleteById(id);
	}
}
