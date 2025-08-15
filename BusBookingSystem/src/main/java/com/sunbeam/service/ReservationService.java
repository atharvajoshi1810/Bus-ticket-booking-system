package com.sunbeam.service;

import com.sunbeam.dto.ReservationDto;
import com.sunbeam.entity.Reservation;

public interface ReservationService {
	
	public Reservation addReservation(ReservationDto dto);

}
