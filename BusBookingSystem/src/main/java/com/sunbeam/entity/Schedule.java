package com.sunbeam.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor

@Table(name="schedules")


public class Schedule extends BaseEntity{
	@Column(name="departure_time")
	private LocalDateTime departureTime; 
	@Column(name="arrival_time")
	private LocalDateTime arrivalTime;
	@Column(name="availabe_seats")
	private int availabeSeats;
	@JsonIgnore
	@ManyToOne
	@JoinColumn(name = "bus_id",nullable = false)
	private Bus bus;
	

}
