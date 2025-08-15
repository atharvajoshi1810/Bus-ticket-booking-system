package com.sunbeam.service;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.ScheduleDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ScheduleDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Schedule;

@Service
@Transactional
public class ScheduleServiceImpl implements ScheduleService {
	@Autowired
	private ModelMapper mapper;
	
	@Autowired
	private ScheduleDao scheduledao;

	@Autowired
	private BusDao busdao;

	@Override
	public ApiResponse AddShedule(ScheduleDto dto) {
		
		System.out.println("Inside Addschedule");
		System.out.println(dto);

			Bus bus = busdao.findById(dto.getBusId())
					.orElseThrow(()->new RuntimeException("Invalid Bus ID"));
			Schedule schedule= mapper.map(dto,Schedule.class);
			schedule.setBus(bus);
			
			scheduledao.save(schedule);
			
			return new ApiResponse("Schedule Added Succesfully");
		
		
	}

	@Override
	public List<Schedule> GetAllSchedule() {
		// TODO Auto-generated method stub
		return scheduledao.findAll();
	}
	
}
