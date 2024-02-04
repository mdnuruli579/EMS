package com.nurul.TeamManagement.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nurul.TeamManagement.Entity.ApiResponse;
import com.nurul.TeamManagement.Entity.Login;
import com.nurul.TeamManagement.Services.LoginService;

@CrossOrigin
@RestController
@RequestMapping("/login")
public class LoginController {
	@Autowired LoginService loginService;
	
	@GetMapping("/do")
	public ResponseEntity<ApiResponse>UserLogin(@RequestBody Login user){
		
		Login login=null;
		try {
			String usr=user.getUsername();
			login=loginService.getUser(usr);
			if(login.getUsername()==usr && login.getPassword()==user.getPassword()) {
				login.setStatus('A');
				loginService.save(login);
			}
			else {
				return new ResponseEntity<ApiResponse>(new ApiResponse("Password Do not Match",HttpStatus.UNAUTHORIZED.value(),
						HttpStatus.UNAUTHORIZED),HttpStatus.NOT_FOUND);
			}
		}
		catch(Exception e){
			return new ResponseEntity<ApiResponse>(new ApiResponse("User Not Found",HttpStatus.NOT_FOUND.value(),
					HttpStatus.NOT_FOUND),HttpStatus.NOT_FOUND);
		}
		return new ResponseEntity<ApiResponse>(new ApiResponse(login.getUsername(),HttpStatus.OK.value(),
				HttpStatus.OK),HttpStatus.OK);
	}

}
