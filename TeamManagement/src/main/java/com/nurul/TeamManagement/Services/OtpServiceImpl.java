package com.nurul.TeamManagement.Services;
import org.springframework.stereotype.Service;
import javax.mail.*;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.Properties;
import java.util.HashMap;
import java.util.Map;

@Service
public class OtpServiceImpl implements OtpService {
	
		private final Map<String, OtpData> otpDataMap = new HashMap<>();
		
		
		/* private final JavaMailSender javaMailSender; */
		
		/*
		 * @Autowired public OtpServiceImpl(JavaMailSender javaMailSender) {
		 * this.javaMailSender = javaMailSender; }
		 */

		@Override
		 public String generateOtp(String useremail) {
		     // Generate a random 6-digit OTP
		     String otpValue= String.valueOf(100000 + (int) (Math.random() * 900000));
		     String generatedOtp = String.valueOf(otpValue);
		     String email = useremail;
		     otpDataMap.put(email, new OtpData(generatedOtp, System.currentTimeMillis() + 10 * 60 * 1000)); // 10 minutes validity
		     System.out.println("Otp Generated "+generatedOtp);
		     return generatedOtp;
		 }
		
		 @Override
		 public void sendOtpEmail(String email, String otp){
				
				  Properties properties = new Properties(); properties.put("mail.smtp.auth",
				  "true"); properties.put("mail.smtp.ssl.enable", "true");
				  properties.put("mail.smtp.host", "smtp.gmail.com");
				  properties.put("mail.smtp.port", "465");
				  properties.put("mail.debug","true");
				  
				  Session session = Session.getInstance(properties, new Authenticator() {
				  
				  @Override protected PasswordAuthentication getPasswordAuthentication() {
				  return new PasswordAuthentication("nurulemsindia@gmail.com", "Emsindia@2024"); }
				  });
				 
		     try {
					
					  Message message = new MimeMessage(session); message.setFrom(new InternetAddress("nurulemsindia@gmail.com"));
					  message.setRecipients(Message.RecipientType.TO,InternetAddress.parse(email));
					  message.setSubject("OTP for Verification on EMS India");
					  message.setText("Your OTP For Varication is: " +
					  otp+"\nValid only for 10 minutes"); 
					  Transport.send(message);
					 
					/*
					 * MimeMessage message = javaMailSender.createMimeMessage(); MimeMessageHelper
					 * helper = new MimeMessageHelper(message, true);
					 * helper.setFrom("esmindia82@gmail.com"); helper.setTo(email);
					 * helper.setSubject("OTP for Verification on EMS India");
					 * helper.setText("Your OTP For Varication is: " +otp
					 * +"\nValid only for 10 minutes"); javaMailSender.send(message);
					 */
		         System.out.println("Mail sent");
		     } catch (MessagingException e) {
		         e.printStackTrace();
		     }
		 }
		
		@Override
		public boolean validateOtp(String email, String userEnteredOtp) {
			OtpData otpData = otpDataMap.get(email);
		
		    if (otpData != null && otpData.getExpirationTime() > System.currentTimeMillis()) {
		        // Compare the entered OTP with the stored OTP
		        return userEnteredOtp.equals(otpData.getOtp());
		    } else {
		        // OTP is either expired or not found
		        return false;
		    }
		}
		
		private static class OtpData {
		    private final String otp;
		    private final long expirationTime;
		
		    public OtpData(String otp, long expirationTime) {
		        this.otp = otp;
		        this.expirationTime = expirationTime;
		    }
		
		    public String getOtp() {
		        return otp;
		    }
		
		    public long getExpirationTime() {
		        return expirationTime;
		    }
		}
}

