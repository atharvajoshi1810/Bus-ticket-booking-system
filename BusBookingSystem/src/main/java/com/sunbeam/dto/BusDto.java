package com.sunbeam.dto;

import java.time.LocalDate;
import java.time.LocalTime;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.sunbeam.entity.BusType;

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


public class BusDto{
	
	
	private String busNumber;
	private int busCapacity;
	private BusType busType;
	
	private String source;
	private String destination;
	
	

	private String driverName;
	
	
	private LocalDate journeyDate; 
	
	// @JsonFormat(pattern = "HH:mm:ss")
	    private LocalTime departureTime;

	    //@JsonFormat(pattern = "HH:mm:ss")
	    private LocalTime arrivalTime;


	private int availabeSeats;
	
	
	private double fare;
	
	private Long routeId;
	

}
