package com.sunbeam.dao;

import java.time.LocalDate;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.sunbeam.entity.Bus;

public interface BusDao extends JpaRepository<Bus, Long> {
	
	//@Query("Select b from Bus b where b.journeyDate = :Jdate and b.selectedRoute.origin=:org and b.selectedRoute.destination=:des")
//	List<Bus> getAllBusesFromSourceAndDest(@Param LocalDate Jdate,String org ,String des);
	
	//@Query("SELECT b FROM Bus b WHERE b.JourneyDate = :Jdate AND b.route.routeFrom = :org AND b.route.routeTo = :des")
	//@Query("Select b from Bus b where  b.selectedRoute.origin=:org and b.selectedRoute.destination=:des")
	//@Query("Select b from Bus b where b.source=:org and b.destination=:destination")
	//List<Bus> getAllBusesFromSourceAndDest( @Param("org") String org,@Param("destination") String destination);
	@Query("Select b from Bus b where b.journeyDate = :Jdate and b.selectedRoute.origin=:org and b.selectedRoute.destination=:des")
	List<Bus> getAllBusesFromSourceAndDest(@Param("Jdate") LocalDate Jdate, @Param("org") String org, @Param("des") String des);
	
	 Bus findByBusNumber(String busNumber);

}

