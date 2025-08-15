//package com.sunbeam.controller;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RestController;
//
//import com.sunbeam.dto.CustomerDto;
//import com.sunbeam.service.CustomerServiceImpl;
//
//@RestController
//@RequestMapping("/Admin/Bus")
//	public class BusController {
//	
//	@Autowired	
//	private BusServiceImpl busservice;
//	
//	
//	@PostMapping("/register")
//	public ResponseEntity<?> RegisterBus(@RequestBody BusDto dto)
//	{
//		System.out.println(dto);
//		return ResponseEntity.ok(busservice.addBus(dto));
//	}
//	
//
//}
