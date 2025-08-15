package com.sunbeam.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

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

@Table(name="payments")


public class Payment extends BaseEntity{

	@Column(name = "payment_date")
	private LocalDate paymentDate;
	private double amount;

	@Column(name = "payment_method")	
	private String paymentMethod;

	@Column(name = "payment_status")
	private String paymentStatus;
	
	
	

}
