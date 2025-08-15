package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.CustomerDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.LoginDto;
import com.sunbeam.entity.Customer;
import com.sunbeam.entity.Role;

@Transactional
@Service
public class CustomerServiceImpl implements CustomerService {
	
	@Autowired
	CustomerDao customerdao;
	@Autowired
	ModelMapper mapper;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	public String registerCustomer(CustomerDto dto)
	{
		//System.out.println("Service:: "+dto);
		Customer customer=mapper.map(dto, Customer.class);
		customer.setRole(Role.ROLE_ADMIN);
		customer.setPassword(passwordEncoder.encode(customer.getPassword()));
		customerdao.save(customer);		
		return "Regisered Successfully";
	}

	@Override
	public List<Customer> getAllCustomers() {
		// TODO Auto-generated method stub
		return customerdao.findAll();
	}
	@Override
	public ApiResponse login(LoginDto dto) {
		String email=dto.getCustomerEmail();
		String password=dto.getPassword();
		Customer customer= customerdao.findByCustomerEmailAndPassword(email,password);
		if(customer==null) {
			return  new ApiResponse("Invalied Email and Password");
		}
//		if(customer!=null){
//		 if(customer.getPassword()==dto.getPassword()) {
//			 return new ApiResponse("Login Successfully");
//	
//		}
//		return new ApiResponse("Invalie Password");
//	}
		return new ApiResponse("Login Successfully");
	}

	@Override
	public Customer GetUserByID(Long id) {
	
		Customer customer= customerdao.findById(id).orElseThrow(()-> new RuntimeException( "Invalid user ID"));
		return customer;
	}

	@Override
	public String removedStatus(Long id) {
		Customer customer= customerdao.findById(id).orElseThrow(()-> new RuntimeException( "Invalid user ID"));
		customer.setRemovedStatus(true);
		return "User suspended Successfully";
	}
	
	

}
