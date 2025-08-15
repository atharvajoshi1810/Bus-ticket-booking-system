package com.sunbeam.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Bus;
import com.sunbeam.entity.FeedBack;

public interface FeedbackDao  extends JpaRepository<FeedBack, Long>{
	
	 List<FeedBack> findByBus(Bus bus);

}
