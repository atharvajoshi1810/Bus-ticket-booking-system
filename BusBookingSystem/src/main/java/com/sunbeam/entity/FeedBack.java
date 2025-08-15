package com.sunbeam.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class FeedBack extends BaseEntity{
	
	private int serviceRating;
	private int driverRating ;
	private int overallRatilng=(serviceRating+driverRating)/2;
    private String comments;
	
  //  @JsonIgnore
	@ManyToOne
	private Customer user;
  //  @JsonIgnore
	@ManyToOne
	private Bus bus;
	
	
	
	
	public int getOverallRatilng() {
		return overallRatilng;
	}

	public void setOverallRatilng(int overallRatilng) {
		this.overallRatilng = overallRatilng;
	}

	

	public int getServiceRating() {
		return serviceRating;
	}

	public void setServiceRating(int serviceRating) {
		this.serviceRating = serviceRating;
	}

	public int getDriverRating() {
		return driverRating;
	}

	public void setDriverRating(int driverRating) {
		this.driverRating = driverRating;
	}


	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public Customer getUser() {
		return user;
	}

	public void setUser(Customer user) {
		this.user = user;
	}

	public Bus getBus() {
		return bus;
	}

	public void setBus(Bus bus) {
		this.bus = bus;
	}

	@Override
	public String toString() {
		return "FeedBack [serviceRating=" + serviceRating + ", driverRating=" + driverRating + ", comments=" + comments
				+ ", user=" + user + ", bus=" + bus + "]";
	}

	public FeedBack(Long id, LocalDate createdOn, LocalDateTime updatedOn, int serviceRating, int driverRating,
			String comments, Customer user, Bus bus) {
		super(id, createdOn, updatedOn);
		this.serviceRating = serviceRating;
		this.driverRating = driverRating;
		this.comments = comments;
		
		this.user = user;
		this.bus = bus;
	}

	public FeedBack() {
		this.overallRatilng=(serviceRating+driverRating)/2;
	}

	public FeedBack(Long id, LocalDate createdOn, LocalDateTime updatedOn) {
		super(id, createdOn, updatedOn);
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	
	
	
}