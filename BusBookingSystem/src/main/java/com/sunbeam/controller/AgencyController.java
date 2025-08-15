//package com.sunbeam.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sunbeam.dto.AgencyDto;
//import com.sunbeam.dto.CustomerDto;
//import com.sunbeam.service.AgencyServiceImpl;
//
//@RestController
//@RequestMapping("/Agency")
//public class AgencyController {
//	
//	@Autowired
//	private AgencyServiceImpl agencyservice;
//	
//	public AgencyController() {
//		System.out.println("Inside "+getClass());
//	}
//	
//	@PostMapping("/AddAgency")
//	public ResponseEntity<?> RegisterAgency(@RequestBody AgencyDto dto)
//	{
//		System.out.println(dto);
//		return ResponseEntity.ok(agencyservice.addAgency(dto));
//	}
//	
//
//}
