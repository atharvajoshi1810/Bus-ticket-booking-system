package com.sunbeam.dto;

import com.sunbeam.entity.Gender;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor



public class CustomerDto {
	

	private String customerFname;

	private String customerLname;

	private String customerEmail;
	
	private Gender gender;
	
	private int age;
	
	private String customerPhone;
	
	private String password;
	
	private String address;
	
		

}
