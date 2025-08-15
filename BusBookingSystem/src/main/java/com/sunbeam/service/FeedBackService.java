package com.sunbeam.service;

import java.util.List;

import com.sunbeam.dto.FeedbackDto;
import com.sunbeam.entity.FeedBack;

public interface FeedBackService {
	
	public  String addFeedBack(FeedbackDto dto);
	
	public List<FeedBack> getAllFeedBacks();
	
	public List<FeedBack> getFeedBackOfSpcificBus(Long id);

}
