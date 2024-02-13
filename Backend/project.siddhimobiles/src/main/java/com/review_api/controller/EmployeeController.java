package com.review_api.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.siddhimobiles.entity.Employee;
import com.review_api.service.EmployeeServices;



@RestController
public class EmployeeController {
	@Autowired
	private EmployeeServices employeeServiceRef;

	@GetMapping("/employee")
	public Collection<Employee> getAllEmployee() {
		Collection<Employee> allEmployee = employeeServiceRef.getAllEmployee();
		return allEmployee;
	}

	@GetMapping("/employee/{employeeId}")
	public Employee getOneEmployee(@PathVariable("employeeId") Integer id) {
		Employee foundEmployee = employeeServiceRef.getOneEmployee(id);
		return foundEmployee;
	}

	@PostMapping("/employee")
	public void addNewEmployee(@RequestBody Employee employeeRef) {
		System.out.println(employeeRef);
		employeeServiceRef.addNewEmployee(employeeRef);

	}

	@DeleteMapping("/employee/{employeeId}")
	public void deleteOneEmployee(@PathVariable("employeeId") Integer id) {
		employeeServiceRef.deleteOneEmployee(id);
	}
}
