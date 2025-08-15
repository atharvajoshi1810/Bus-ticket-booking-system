package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.ApiResponse;
import com.sunbeam.dto.RouteDto;
import com.sunbeam.entity.Route;

public interface RouteService {
	
	public ApiResponse addRoute(RouteDto dto);
	public List<Route> GetAllroute();
	public Route getRouteById(Long id);

}
