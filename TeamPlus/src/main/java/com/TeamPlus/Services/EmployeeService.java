package com.TeamPlus.Services;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import com.TeamPlus.Entity.*;

import org.springframework.beans.factory.annotation.Autowired;

import com.TeamPlus.Dao.EmployeeDao;

@Service
public class EmployeeService {
	@Autowired
	EmployeeDao employeeDao;
	public List<Employee>getAllEmployee(){
		List<Employee>page=null;
		page=this.employeeDao.findAll();
		return page;
	}
	public Employee getEmployeeById(Integer id){
		Employee employee=this.employeeDao.findById((int)id);
		return employee;
	}
	public Employee getEmployeeByEmail(String email){
		Employee employee=this.employeeDao.findByEmail(email);
		return employee;
	}
	public Employee getEmployeeByAddressId(Integer id){
		Employee employee=this.employeeDao.findByAddressId(id);
		return employee;
	}
	public Employee getEmployeeByDepartmentId(Integer id){
		Employee employee=this.employeeDao.findByDepartmentId(id);
		return employee;
	}
	public Employee getEmployeeByJobTitle(String title){
		Employee employee=this.employeeDao.findByJobTitle(title);
		return employee;
	}
	public void save(Employee employee) {
		this.employeeDao.save(employee);
	}
	public void deleteEmployeeById(Integer id) {
		this.employeeDao.deleteById(id);
	}
}
