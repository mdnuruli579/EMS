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
import com.nurul.TeamManagement.Entity.Manager;
import com.nurul.TeamManagement.Services.ManagerService;

@CrossOrigin
@RestController
@RequestMapping("/manager")
public class ManagerController {
	@Autowired
	ManagerService managerService;
	
	@GetMapping("/list")
	public ResponseEntity<List<Manager> >getAllManager(){
		List<Manager> list=null;
		
		try {
			list=managerService.getAllManager();
		}
		catch(Exception e) {
			return new ResponseEntity<List<Manager> >(list,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<List<Manager> >(list,HttpStatus.OK);
	}
	@GetMapping("/detail/{id}")
	public ResponseEntity<Manager>Details(@PathVariable("id") Integer id){
		
		Manager manager=null;
		try {
			manager=managerService.getManagerById(id);
		}
		catch(Exception e){
			return new ResponseEntity<Manager>(manager,HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<Manager>(manager,HttpStatus.OK);
	}
	@PostMapping("/add")
	public ResponseEntity<ApiResponse> AddManager(@RequestBody Manager manager) {
			
			try {
				managerService.save(manager);
			}
			catch(Exception e) {
				return new ResponseEntity<ApiResponse>(new ApiResponse("Data does not saved",HttpStatus.BAD_REQUEST.value(),HttpStatus.BAD_REQUEST),HttpStatus.BAD_REQUEST);
			}
			return new ResponseEntity<ApiResponse>(new ApiResponse("Added Manager Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.CREATED);
	}
	
	@DeleteMapping("/delete/{id}")
	 public ResponseEntity<ApiResponse> deleteManagerById(@PathVariable("id") Integer id) {
		try {
			managerService.deleteManagerById(id);
		}
		catch(Exception e) {
			return new ResponseEntity<ApiResponse>( new ApiResponse("Somthing wrong",HttpStatus.NO_CONTENT.value(),HttpStatus.NO_CONTENT),HttpStatus.NOT_FOUND);
		}
	    return new ResponseEntity<ApiResponse>( new ApiResponse ("Deleted Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	 }

	
	@PutMapping("/update/{id}")
	public ResponseEntity<ApiResponse> Update(@PathVariable("id") Integer id,@RequestBody Manager newManager){
		Manager manager=null;
		try {
			manager=managerService.getManagerById(id);
			if(newManager.getManagerName()!=null)
				manager.setManagerName(newManager.getManagerName());
			if(newManager.getEmail()!=null)
				manager.setEmail(newManager.getEmail());
			if(newManager.getPhoneNumber()!=null)
				manager.setPhoneNumber(newManager.getPhoneNumber());
			managerService.save(manager);
		}
		catch(Exception e){
			return new ResponseEntity<ApiResponse>(new ApiResponse("Error While Updating",HttpStatus.BAD_REQUEST.value(),HttpStatus.BAD_REQUEST),HttpStatus.INTERNAL_SERVER_ERROR);
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse("Record Updated Sucessfully",HttpStatus.OK.value(),HttpStatus.OK),HttpStatus.OK);
	 }

}
