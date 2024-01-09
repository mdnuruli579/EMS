package com.nurul.TeamManagement.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nurul.TeamManagement.Entity.Manager;

@Repository
public interface ManagerDao extends JpaRepository<Manager, Integer>{
		List<Manager> findAll();
		Manager findById(int id);
		Manager findByEmail(String email);

}
