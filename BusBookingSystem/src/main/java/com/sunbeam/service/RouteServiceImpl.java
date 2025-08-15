package com.sunbeam.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sunbeam.dao.RouteDao;
import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.RouteDto;
import com.sunbeam.entity.Route;
import com.sunbeam.entity.Schedule;

@Service
@Transactional

public class RouteServiceImpl implements RouteService {
	@Autowired
	private RouteDao routedao;
	@Autowired
	private ModelMapper mapper;
	
	@Override
	public ApiResponse addRoute(RouteDto dto) {
		// TODO Auto-generated method stub
		Route route=mapper.map(dto, Route.class);
		routedao.save(route);
		return new ApiResponse("New Route Added !!");
	}
	

	@Override
	public List<Route> GetAllroute() {
		// TODO Auto-generated method stub
		return routedao.findAll();
	}


	@Override
	public Route getRouteById(Long id) {
		Route route=routedao.findById(id).orElseThrow(()-> new RuntimeException( "Invalid route ID"));
		return route;
	}

}
