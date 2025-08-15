package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.CustomerDao;
import com.sunbeam.dao.ReservationDao;
import com.sunbeam.dto.ReservationDto;
import com.sunbeam.entity.BooleanStatus;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Customer;
import com.sunbeam.entity.Reservation;

@Service
@Transactional
public class ReservationServiceImpl implements ReservationService {
	
	@Autowired
	private ReservationDao reservationdao;
	
	@Autowired
	private CustomerDao customerdao;
	
	@Autowired
	private BusDao busDao;
	
	@Autowired
	private ModelMapper mapper;

	@Override
	public Reservation addReservation(ReservationDto dto) {
		
		Customer customer=customerdao.findById(dto.getUserId())
				.orElseThrow(()-> new RuntimeException("Invalid Customer Id"));
		
		Bus busId= busDao.findById(dto.getBusId())
				.orElseThrow(()-> new RuntimeException("Invalid Bus Id"));
		List <BooleanStatus >list=busId.getSeatStatus();
//		if(list.get(dto.getSeatNumber())==BooleanStatus.FALSE) {
//			return	"Seat Is Already Booked";
//		}
		list.set(dto.getSeatNumber(), BooleanStatus.FALSE);
		busId.setSeatStatus(list);
		Reservation reservation=mapper.map(dto, Reservation.class);
		reservation.setCustomer(customer);
		reservation.setSelectedBus(busId);
	    reservation.setReservationDate(LocalDate.now());
		Reservation persistReservation=reservationdao.save(reservation);
		return persistReservation;
	}
}
