package com.sunbeam.dto;

import com.sunbeam.entity.Bus;
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
public class FeedbackDto {

	private int serviceRating;
	private int driverRating ;
	private String busNumber;
	private Long customerId;
	private String comments;
	

	
	
	
	
	
}
