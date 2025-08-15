package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.BusDto;
import com.sunbeam.entity.BooleanStatus;
import com.sunbeam.entity.Bus;

public interface BusService {

	public String addBus(BusDto dto);

	public List<Bus> getAllBuses();

	public List<Bus> getAllBusesBySourceAndDest(String source, String dest, String date);

	public String deleteBus(Long id);

	public List<BooleanStatus> availabilSeat(Long BusId);
	
	public Bus GetBusById(Long id);

}
