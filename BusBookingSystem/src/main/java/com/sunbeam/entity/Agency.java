//package com.sunbeam.entity;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.CascadeType;
//import javax.persistence.Column;
//import javax.persistence.Entity;
//import javax.persistence.JoinColumn;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//import lombok.ToString;
//
//@Entity
//@Getter
//@Setter
//@ToString
//@AllArgsConstructor
//@NoArgsConstructor
//
//@Table(name="agency")
//
//
//public class Agency extends BaseEntity{
//	
//	@Column(name = "agency_name")
//	private String agencyName;
//	
//	@Column(name="agency_email")
//	private String agencyEmail;
//
//	
//	@Column(name = "agency_phone")
//	private String agencyPhone;
//	
//	@Column(name = "agency_address")
//	private String agencyAddress;
//	
//	@Column(name = "agency_password")
//	private String agencyPassword;
//	
//	@OneToMany(cascade = CascadeType.ALL /* ,fetch = FetchType.EAGER */ ,orphanRemoval = true)
//	@JoinColumn(name = "agency_bus")
//	private List<Bus> Buses = new ArrayList<>();
//	
//}
