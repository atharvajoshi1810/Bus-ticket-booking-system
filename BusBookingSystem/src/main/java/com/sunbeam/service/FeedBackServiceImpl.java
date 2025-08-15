package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.CustomerDao;
import com.sunbeam.dao.FeedbackDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.FeedbackDto;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Customer;
import com.sunbeam.entity.FeedBack;
import com.sunbeam.entity.Reservation;
import com.sunbeam.exceptions.ResourceNotFoundException;

@Service
public class FeedBackServiceImpl implements FeedBackService{
	
	@Autowired
	FeedbackDao fdao;

	@Autowired
	private BusDao busDao;
	
	@Autowired
	private CustomerDao customerdao;
	
	@Autowired
	private ModelMapper mapper;
	
//addfeedback
	@Override
	public String addFeedBack(FeedbackDto dto) {
		
		
		Customer customer=customerdao.findById(dto.getCustomerId())
				.orElseThrow(()-> new RuntimeException("Invalid Customer Id"));
		
		Bus bus= busDao.findByBusNumber(dto.getBusNumber());
				//.orElseThrow(()-> new RuntimeException("Invalid Bus Id"));
		System.out.println();
		
		FeedBack fback=mapper.map(dto, FeedBack.class);
		
		fback.setUser(customer);
		fback.setBus(bus);	
	    fback.setCreatedOn(LocalDate.now());
	    fback.setOverallRatilng((dto.getDriverRating()+dto.getServiceRating())/2);
		FeedBack persistReservation=fdao.save(fback);
		return "feedback saved";
			
	}
	
//All feedBack
	@Override
	public List<FeedBack> getAllFeedBacks() {
		
		
		
		return fdao.findAll();
	}

	//feedback by bus id
	@Override
	public List<FeedBack> getFeedBackOfSpcificBus(Long id) {
		
		 Bus bus = busDao.findById(id).orElseThrow(() -> new ResourceNotFoundException("Bus not found"));
	        return fdao.findByBus(bus);
	}

}
