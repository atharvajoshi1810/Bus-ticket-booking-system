package com.sunbeam.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Customer;

public interface CustomerDao extends JpaRepository<Customer, Long> {
	
	//Customer registerCustomer();
	Customer findByCustomerEmailAndPassword(String customerEmail,String password);

	Optional< Customer> findByCustomerEmail(String customerEmail);
}
