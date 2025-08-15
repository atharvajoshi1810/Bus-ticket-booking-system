package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.dto.ReservationDto;
import com.sunbeam.entity.Customer;

public interface CustomerService {
	public String registerCustomer(CustomerDto dto);
	public ApiResponse login(LoginDto dto);
	public List<Customer> getAllCustomers();
	public Customer GetUserByID(Long id);
	public String removedStatus(Long id);


}
