package com.nurul.TeamManagement.Controller;

import java.util.List;

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
import org.springframework.web.bind.annotation.RestController;

import com.nurul.TeamManagement.Entity.ApiResponse;
import com.nurul.TeamManagement.Entity.Department;
import com.nurul.TeamManagement.Services.DepartmentService;

@CrossOrigin
@RestController
@RequestMapping("/department")
public class DepartmentController {
	@Autowired
	DepartmentService departmentService;
	
	@GetMapping("/list")
	public ResponseEntity<List<Department> >getAlldepartment(){
		List<Department> list=null;
		
		try {
			list=departmentService.getAllDepartment();
		}
		catch(Exception e) {
			return new ResponseEntity<List<Department> >(list,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Department> >(list,HttpStatus.OK);
	}
	@GetMapping("/detail/{id}")
	public ResponseEntity<Department>Details(@PathVariable("id") Integer id){
		
		Department department=null;
		try {
			department=departmentService.getDepartmentById(id);
		}
		catch(Exception e){
			return new ResponseEntity<Department>(department,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Department>(department,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<ApiResponse> AddDepartment(@RequestBody Department department) {
			
			try {
				departmentService.save(department);
			}
			catch(Exception e) {
				return new ResponseEntity<ApiResponse>(new ApiResponse("Data does not saved",HttpStatus.BAD_REQUEST.value(),HttpStatus.BAD_REQUEST),HttpStatus.INTERNAL_SERVER_ERROR);
			}
			return new ResponseEntity<ApiResponse>(new ApiResponse("Data Saved Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{id}")
	 public ResponseEntity<ApiResponse> deleteDepartmentById(@PathVariable("id") Integer id) {
		try {
			Department department=departmentService.getDepartmentById(id);
			if(department!=null) {
				departmentService.deleteDepartmentById(id);
			}
			else {
				return new ResponseEntity<ApiResponse>(new ApiResponse("Department not found",HttpStatus.NOT_FOUND.value(),HttpStatus.NOT_FOUND),HttpStatus.NOT_FOUND);
			}
		}
		catch(Exception e) {
			return new ResponseEntity<ApiResponse>(new ApiResponse("Something went wrong",HttpStatus.INTERNAL_SERVER_ERROR.value(),HttpStatus.INTERNAL_SERVER_ERROR),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse("Deleted Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	 }

	
	@PutMapping("/update/{id}")
	public ResponseEntity<Department> Update(@PathVariable("id") Integer id,@RequestBody Department newDepartment){
		Department department=null;
		try {
			department=departmentService.getDepartmentById(id);
			if(newDepartment.getDepartmentName()!=null)
				department.setDepartmentName(newDepartment.getDepartmentName());
			if(newDepartment.getLocation()!=null)
				department.setLocation(newDepartment.getLocation());
			departmentService.save(department);
		}
		catch(Exception e){
			return new ResponseEntity<Department>(department,HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<Department>(department,HttpStatus.OK);
	 }

}
