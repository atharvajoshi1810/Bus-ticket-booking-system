package com.sunbeam.dto;

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



public class AgencyDto{
	
	private String agencyName;
	private String agencyEmail;	
	private String agencyPhone;
	private String agencyAddress;
	private String agencyPassword;
		
}
