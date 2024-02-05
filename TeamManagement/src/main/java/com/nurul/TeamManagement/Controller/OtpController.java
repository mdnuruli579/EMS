package com.nurul.TeamManagement.Controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nurul.TeamManagement.Entity.EmailOtp;
import com.nurul.TeamManagement.Services.OtpService;

	@RestController
	@RequestMapping("/otp")
	public class OtpController {
		 private final OtpService otpService;
		
		 @Autowired
		 public OtpController(OtpService otpService) {
		     this.otpService = otpService;
		 }
		
		 @PostMapping("/send")
		 public void sendOtp(@RequestBody EmailOtp emailOtp) {
		     String generatedOtp = otpService.generateOtp(emailOtp.getEmail());
		     try {
				otpService.sendOtpEmail(emailOtp.getEmail(), generatedOtp);
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		 }
		
		 @PostMapping("/validate")
		 public boolean validateOtp(@RequestBody EmailOtp emailOtp) {
		     return otpService.validateOtp(emailOtp.getEmail(), emailOtp.getOtp());
		 }
	}

