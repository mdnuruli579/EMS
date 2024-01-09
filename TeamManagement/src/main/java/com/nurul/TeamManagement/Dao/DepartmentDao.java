package com.nurul.TeamManagement.Dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nurul.TeamManagement.Entity.Department;

@Repository
public interface DepartmentDao extends JpaRepository<Department, Integer>{
	  List<Department> findAll();
	  Department findById(int id);
	  Department findByDepartmentName(String departmentName);
	 
}
