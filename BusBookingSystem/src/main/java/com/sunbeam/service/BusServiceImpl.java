package com.sunbeam.service;

import java.time.LocalDate;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.BusDao;
import com.sunbeam.dao.RouteDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.BusDto;
import com.sunbeam.dto.CustomerDto;
import com.sunbeam.dto.SearchDto;
import com.sunbeam.entity.BooleanStatus;
import com.sunbeam.entity.Bus;
import com.sunbeam.entity.Customer;
import com.sunbeam.entity.Route;

@Service
@Transactional
public class BusServiceImpl implements BusService {
	@Autowired
	private BusDao busdao;
	
	@Autowired
	private RouteDao routeDao;
	@Autowired
	private ModelMapper mapper;

	@Override
	public String addBus(BusDto dto) {
		// TODO Auto-generated method stub
		Route route= routeDao.findById(dto.getRouteId()).orElseThrow(()-> new RuntimeException( "Route not found"));
		Bus bus=mapper.map(dto, Bus.class);	
		bus.setSelectedRoute(route);
		busdao.save(bus);
		return "Bus Added Successfully";
	}

	@Override
	public List<Bus> getAllBuses() {
		
		return busdao.findAll();
	}

	@Override
	public List<Bus> getAllBusesBySourceAndDest(String source,String dest,String date) {
//		String source =dto.getSource();
//		String destination =dto.getDestination();
		LocalDate date1=LocalDate.parse(date);
		List<Bus> list = busdao.getAllBusesFromSourceAndDest(date1, dest,source);
		System.err.println(list);
		return  list;
		
	}

	@Override
	public String deleteBus(Long id) {
		 Bus bus = busdao.findById(id).orElseThrow(() -> new RuntimeException("Bus not found"));
	        bus.setDeletedStatus(true);
	        busdao.save(bus);
	        return "Bus deleted successfully";
	}

	@Override
	public List<BooleanStatus> availabilSeat(Long busId) {
//		Bus bus = busdao.findById(BusId).orElseThrow(() -> new RuntimeException("Bus not found"));
//		List<BooleanStatus> list=bus.getSetStatus();
//		return list;
		Bus bus = busdao.findById(busId).orElseThrow(() -> new RuntimeException("Bus not found"));
        // Ensure the collection is properly loaded
        bus.getSeatStatus().size();
        return bus.getSeatStatus();
	}

	@Override
	public Bus GetBusById(Long busId) {
		Bus bus = busdao.findById(busId).orElseThrow(() -> new RuntimeException("Bus Id is incorrect"));
		return bus;
	}
	
		
}
