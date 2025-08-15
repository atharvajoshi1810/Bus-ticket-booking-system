//package com.sunbeam.service;
//
//import org.modelmapper.ModelMapper;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.sunbeam.dao.AgencyDao;
//import com.sunbeam.dto.AgencyDto;
//import com.sunbeam.entity.Agency;
//
//@Service
//@Transactional
//public class AgencyServiceImpl implements AgencyService {
//	@Autowired
//	private ModelMapper mapper;
//	@Autowired
//	private AgencyDao agencydao;
//
//	@Override
//	public String addAgency(AgencyDto dto) {
//		// TODO Auto-generated method stub
//		Agency agency=mapper.map(dto, Agency.class);
//		agencydao.save(agency);
//		return "Agency Added Successfully";
//	}
//	
//	
//}
