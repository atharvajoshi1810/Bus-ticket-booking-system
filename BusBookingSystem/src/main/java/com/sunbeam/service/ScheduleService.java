package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.ScheduleDto;
import com.sunbeam.entity.Schedule;

public interface ScheduleService {
	
	public ApiResponse AddShedule(ScheduleDto dto) ;
	
	public List<Schedule> GetAllSchedule();

}
