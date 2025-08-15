package com.sunbeam.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.sunbeam.entity.Schedule;

public interface ScheduleDao extends JpaRepository<Schedule, Long> {

}
