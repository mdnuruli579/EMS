package com.nurul.TeamManagement.Controller;
import java.time.LocalDate;
import java.util.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.nurul.TeamManagement.Entity.ApiResponse;
import com.nurul.TeamManagement.Entity.Employee;
import com.nurul.TeamManagement.Services.EmployeeService;

@CrossOrigin
@RestController
@RequestMapping("/employee")
public class EmployeeController {
	
	@Autowired
	EmployeeService employeeService;
	
	@GetMapping("/list")
	public ResponseEntity<List<Employee> >getAllemployee(){
		List<Employee> list=null;
		
		try {
			list=employeeService.getAllEmployee();
		}
		catch(Exception e) {
			return new ResponseEntity<List<Employee> >(list,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Employee> >(list,HttpStatus.OK);
	}
	@GetMapping("/detail/{id}")
	public ResponseEntity<Employee>Details(@PathVariable("id") Integer id){
		
		Employee employee=null;
		try {
			employee=employeeService.getEmployeeById(id);
		}
		catch(Exception e){
			return new ResponseEntity<Employee>(employee,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Employee>(employee,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<ApiResponse> AddEmployee(@RequestBody Employee employee) {
			
			try {
				employee.setCreateTime(LocalDate.now());
				employeeService.save(employee);
			}
			catch(Exception e) {
				return new ResponseEntity<ApiResponse>(new ApiResponse("Data does not saved",HttpStatus.BAD_REQUEST.value(),HttpStatus.BAD_REQUEST),HttpStatus.BAD_REQUEST);
			}
			return new ResponseEntity<ApiResponse>(new ApiResponse("Added Employee Record Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	 public ResponseEntity<ApiResponse> deleteEmployeeById(@PathVariable("id") Integer id) {
		try {
			employeeService.deleteEmployeeById(id);
		}
		catch(Exception e) {
			return new ResponseEntity<ApiResponse>( new ApiResponse("Somthing wrong",HttpStatus.NO_CONTENT.value(),HttpStatus.NO_CONTENT),HttpStatus.NOT_FOUND);
		}
	    return new ResponseEntity<ApiResponse>( new ApiResponse ("Deleted Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	 }

	
	@PutMapping("/update/{id}")
	public ResponseEntity<ApiResponse> UpdateEmployee(@PathVariable("id") Integer id,@RequestBody Employee newEmployee){
		Employee employee=null;
		try {
			employee=employeeService.getEmployeeById(id);
			if(newEmployee.getFirstName()!=null)
				employee.setFirstName(newEmployee.getFirstName());
			if(newEmployee.getLastName()!=null)
				employee.setLastName(newEmployee.getLastName());
			if(newEmployee.getAddressId()!=null)
				employee.setAddressId(newEmployee.getAddressId());
			if(newEmployee.getDepartmentId()!=null)
				employee.setDepartmentId(newEmployee.getDepartmentId());
			if(newEmployee.getDob()!=null)
				employee.setDob(newEmployee.getDob());
			if(newEmployee.getEmail()!=null)
				employee.setEmail(newEmployee.getEmail());
			if(newEmployee.getEmergencyContactName()!=null)
				employee.setEmergencyContactName(newEmployee.getEmergencyContactName());
			if(newEmployee.getEmergencyContactPhoneNumber()!=null)
				employee.setEmergencyContactPhoneNumber(newEmployee.getEmergencyContactPhoneNumber());
			if(newEmployee.getEmergencyContactRelationship()!=null)
				employee.setEmergencyContactRelationship(newEmployee.getEmergencyContactRelationship());
			if(newEmployee.getEmpStatus()!=null)
				employee.setEmpStatus(newEmployee.getEmpStatus());
			if(newEmployee.getSalary()!=null)
				employee.setSalary(newEmployee.getSalary());
			if(newEmployee.getPhotoURL()!=null)
				employee.setPhotoURL(newEmployee.getPhotoURL());
			if(newEmployee.getGender()!=null)
				employee.setGender(newEmployee.getGender());
			if(newEmployee.getPhnNumber()!=null)
				employee.setPhnNumber(newEmployee.getPhnNumber());
			if(newEmployee.getJobTitle()!=null)
				employee.setJobTitle(newEmployee.getJobTitle());
			if(newEmployee.getHireDate()!=null)
				employee.setHireDate(newEmployee.getHireDate());
			if(newEmployee.getManagerId()!=null)
				employee.setManagerId(newEmployee.getManagerId());
			employee.setCreateTime(LocalDate.now());
			employeeService.save(employee);
		}
		catch(Exception e){
			return new ResponseEntity<ApiResponse>(new ApiResponse("Error While Updating",HttpStatus.BAD_REQUEST.value(),HttpStatus.BAD_REQUEST),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse("Record Updated Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	 }
}
