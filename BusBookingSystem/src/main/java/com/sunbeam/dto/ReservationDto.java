package com.sunbeam.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;


@Setter
@Getter
@ToString
@AllArgsConstructor
public class ReservationDto {
	private Long userId;
	 private Long busId;
	 private Integer seatNumber;
	
}
