package com.review_api.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.review_api.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
