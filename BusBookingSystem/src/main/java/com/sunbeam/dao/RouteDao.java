package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Route;

public interface RouteDao extends JpaRepository<Route, Long> {

}
