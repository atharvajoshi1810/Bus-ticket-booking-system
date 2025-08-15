
package com.sunbeam.entity;
//
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

//import lombok.ToString;
//
//@Entity
//@Getter
//@Setter
//@AllArgsConstructor
//@NoArgsConstructor
//@Table(name = "buses")
//@ToString(exclude = {"reservations", "selectedRoute"})
//public class Bus extends BaseEntity {
//    @Column(name = "bus_number")
//    private String busNumber;
//    @Column(name = "bus_capacity")
//    private int busCapacity;
//    @Column(name = "bus_type")
//    private BusType busType;
//    @Column(name = "bus_source")
//    private String source;
//    @Column(name = "bus_destination")
//    private String destination;
//    @Column(name = "driver_name")
//    private String driverName;
//    @Column(name = "journey_date")
//    private LocalDate journeyDate;
//    @Column(name = "departure_time")
//    private LocalTime departureTime;
//    @Column(name = "arrival_time")
//    private LocalTime arrivalTime;
//    @Column(name = "availabe_seats")
//    private int availabeSeats;
//    @Column(name = "fare")
//    private double fare;
//
//    @Column(name = "deleted_status")
//    @Enumerated(EnumType.STRING)
//    private BooleanStatus deletedStatus = BooleanStatus.FALSE;
//
//    @ElementCollection(fetch = FetchType.EAGER)
//    @Enumerated(EnumType.STRING)
//    @Column(name = "set_status")
//    private List<BooleanStatus> setStatus = new ArrayList<>(Collections.nCopies(30, BooleanStatus.TRUE));
//
//    @OneToMany(mappedBy = "selectedBus", cascade = CascadeType.ALL, orphanRemoval = true)
//    @JsonIgnore
//    private List<Reservation> reservations = new ArrayList<>();
//
//    @ManyToOne
//    @JsonManagedReference
//    @JoinColumn(name = "route_id", nullable = false)
//    private Route selectedRoute;
//}
import com.fasterxml.jackson.annotation.JsonFormat;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "buses")
//@ToString(exclude = {"reservations", "selectedRoute"})
public class Bus extends BaseEntity {
    @Column(name = "bus_number")
    private String busNumber;

    @Column(name = "bus_capacity")
    private int busCapacity;

    @Column(name = "bus_type")
    private BusType busType;

    @Column(name = "bus_source")
    private String source;

    @Column(name = "bus_destination")
    private String destination;

    @Column(name = "driver_name")
    private String driverName;

    @Column(name = "journey_date")
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate journeyDate;

    @Column(name = "departure_time")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime departureTime;

    @Column(name = "arrival_time")
    @JsonFormat(pattern = "HH:mm:ss")
    private LocalTime arrivalTime;

    @Column(name = "availabe_seats")
    private int availabeSeats;

    @Column(name = "fare")
    private double fare;

    @Column(name = "deleted_status")
//  @Enumerated(EnumType.STRING) 
  private boolean deletedStatus;

    @ElementCollection(fetch = FetchType.EAGER)
    @Enumerated(EnumType.STRING)
    @Column(name = "set_status")
    private List<BooleanStatus> seatStatus = new ArrayList<>(Collections.nCopies(30, BooleanStatus.TRUE));

    @OneToMany(mappedBy = "selectedBus", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonIgnore
    private List<Reservation> reservations = new ArrayList<>();

    @ManyToOne
    @JsonManagedReference
    @JoinColumn(name = "route_id", nullable = false)
    private Route selectedRoute;
   
    
    @JsonIgnore
    @OneToMany
	private List<FeedBack> feedback= new ArrayList<>();


}

