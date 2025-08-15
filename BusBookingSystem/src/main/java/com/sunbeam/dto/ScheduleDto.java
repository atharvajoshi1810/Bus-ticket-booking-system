package com.sunbeam.dto;

import java.time.LocalDateTime;

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

public class ScheduleDto {
	
	private LocalDateTime departureTime; 
	
	private LocalDateTime arrivalTime;
	
	private int availabeSeats;
	
	private Long busId;
	

}
