package com.TeamPlus.Dao;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.TeamPlus.Entity.Employee;

import java.util.List;
import java.util.Optional;


@Repository
public interface EmployeeDao extends JpaRepository<Employee, Integer>{
	List<Employee> findAll();
	Employee findById(int id);
	Employee findByEmail(String email);
	Employee findByAddressId(Integer addressId);
	Employee findByDepartmentId(Integer departmentId);
	Employee findByJobTitle(String jobTitle);
}
