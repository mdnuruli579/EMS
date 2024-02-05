package com.nurul.TeamManagement.Services;


public interface OtpService {
 String generateOtp(String usermail);
 void sendOtpEmail(String email, String otp);
 boolean validateOtp(String email, String userEnteredOtp);
}

